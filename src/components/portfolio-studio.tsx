"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  role: ChatRole;
  text: string;
  hasHTML?: boolean;
};

const INITIAL_MESSAGE =
  "告诉我你的职业、审美方向、想突出什么能力，我会把它整理成一版完整的个人作品集网页。你可以直接写风格，也可以先从下面的提示里选一个开始。";

const SUGGESTIONS = [
  "我是一名平面设计师，想要黑白主调加旧金点缀，页面极简但要有展览海报感。",
  "我是摄影师，喜欢深色、电影感、大图铺陈，希望网页像一本影像杂志。",
  "我是产品经理，想要克制、专业、蓝灰色调，重点突出项目成果和方法论。",
  "我是插画师，希望页面像艺术画廊，颜色丰富但不杂乱，可以展示系列作品。",
];

const EMPTY_PREVIEW_HTML = String.raw`<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Studio Preview</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #09101a;
        --panel: rgba(17, 23, 39, 0.88);
        --line: rgba(255, 255, 255, 0.08);
        --text: #f4eee4;
        --muted: rgba(244, 238, 228, 0.66);
        --accent: #d69a4d;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        background:
          radial-gradient(circle at 20% 20%, rgba(214, 154, 77, 0.14), transparent 22%),
          radial-gradient(circle at 84% 18%, rgba(109, 135, 175, 0.14), transparent 26%),
          linear-gradient(160deg, #121a2c 0%, #0b101b 58%, #060a12 100%);
        color: var(--text);
        font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
      }

      .panel {
        width: min(100%, 760px);
        border: 1px solid var(--line);
        border-radius: 28px;
        padding: 32px;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 22%),
          var(--panel);
        box-shadow:
          0 24px 64px rgba(0, 0, 0, 0.36),
          inset 0 1px 0 rgba(255, 255, 255, 0.05);
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
        font-size: 12px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .eyebrow::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: linear-gradient(135deg, #f5d6ab, var(--accent));
        box-shadow: 0 0 16px rgba(214, 154, 77, 0.42);
      }

      h1 {
        margin: 0;
        font-size: clamp(28px, 5vw, 54px);
        line-height: 1.04;
      }

      p {
        margin: 18px 0 0;
        font-size: 16px;
        line-height: 1.8;
        color: var(--muted);
      }
    </style>
  </head>
  <body>
    <main class="panel">
      <div class="eyebrow">Portfolio Studio</div>
      <h1>描述你的方向，右侧预览会在这里亮起来。</h1>
      <p>
        试着告诉我你是谁、希望网页看起来像什么、想先展示哪些项目或经历。
        我会根据这些信息生成完整的单文件 HTML。
      </p>
    </main>
  </body>
</html>`;

function extractHTML(text: string) {
  const codeBlockMatch = text.match(/```html\s*([\s\S]*?)```/i);

  if (codeBlockMatch) {
    return codeBlockMatch[1].trim();
  }

  const rawHtmlMatch = text.match(/<!DOCTYPE html>[\s\S]*<\/html>/i);
  return rawHtmlMatch ? rawHtmlMatch[0].trim() : null;
}

function stripHTMLBlock(text: string) {
  return text.replace(/```html[\s\S]*?```/i, "").trim();
}

export function PortfolioStudio() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: INITIAL_MESSAGE,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedHTML, setGeneratedHTML] = useState("");
  const [activeTab, setActiveTab] = useState<"chat" | "preview">("chat");
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [loading, messages]);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "0px";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 220)}px`;
  }, [input]);

  useEffect(() => {
    if (copyState === "idle") {
      return;
    }

    const timer = window.setTimeout(() => {
      setCopyState("idle");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [copyState]);

  async function sendMessage(userText: string) {
    const trimmed = userText.trim();

    if (!trimmed || loading) {
      return;
    }

    const nextMessages: ChatMessage[] = [...messages, { role: "user", text: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setCopyState("idle");

    try {
      const response = await fetch("/api/portfolio-studio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map((message) => ({
            role: message.role,
            content: message.text,
          })),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; text?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error || "生成失败，请稍后再试。");
      }

      const replyText = payload?.text?.trim() || "抱歉，这次没有拿到有效回复。";
      const html = extractHTML(replyText);
      const displayText = html
        ? stripHTMLBlock(replyText) || "网页已经生成完成，预览区已更新。"
        : replyText;

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          text: displayText,
          hasHTML: Boolean(html),
        },
      ]);

      if (html) {
        setGeneratedHTML(html);
        setActiveTab("preview");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "网络错误，请稍后重试。";

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          text: message,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function downloadHTML() {
    if (!generatedHTML) {
      return;
    }

    const blob = new Blob([generatedHTML], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "portfolio.html";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function copyHTML() {
    if (!generatedHTML) {
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedHTML);
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  const hasPreview = Boolean(generatedHTML);
  const showChat = activeTab === "chat";
  const showPreview = activeTab === "preview";

  return (
    <main className="section-shell min-h-screen py-4 md:py-6">
      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-[95rem] flex-col gap-4 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[18%] top-0 h-52 rounded-full bg-[radial-gradient(circle,rgba(214,154,77,0.18),transparent_62%)] blur-3xl"
        />

        <header className="surface rounded-[2rem] px-5 py-4 md:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="eyebrow">Portfolio Studio / HTML Generator</div>
              <div className="space-y-2">
                <h1 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.02] text-white">
                  把一句中文描述
                  <span className="bg-[linear-gradient(135deg,#fff8ef_0%,#f3d6ac_40%,#c28e57_100%)] bg-clip-text text-transparent">
                    变成一页完整作品集
                  </span>
                </h1>
                <p className="max-w-3xl text-[0.95rem] leading-7 text-white/68 md:text-base">
                  这里是一个独立的生成器工作台。你负责描述气质、内容和偏好，我来组织版式、视觉系统和可直接下载的 HTML 页面。
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="btn-secondary px-4 py-2.5 text-[13px]">
                返回首页
              </Link>

              <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 xl:hidden">
                <button
                  type="button"
                  onClick={() => setActiveTab("chat")}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium ${
                    showChat ? "bg-white/10 text-white" : "text-white/56"
                  }`}
                >
                  对话
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium ${
                    showPreview ? "bg-white/10 text-white" : "text-white/56"
                  }`}
                >
                  预览
                  {hasPreview ? (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid flex-1 gap-4 xl:grid-cols-[minmax(23rem,28rem)_minmax(0,1fr)]">
          <section
            className={`surface min-h-[32rem] flex-col overflow-hidden rounded-[2rem] ${
              showChat ? "flex" : "hidden xl:flex"
            }`}
          >
            <div className="border-b border-white/8 px-5 py-4 md:px-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="micro-label text-white/46">Creative Brief</p>
                  <p className="mt-2 text-sm text-white/72">
                    越具体越好，比如职业、项目、风格、颜色、语气、想强调的经历。
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/58">
                  Enter 发送
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 md:px-5">
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" ? (
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(244,218,179,0.2),rgba(214,154,77,0.18))] text-xs font-semibold tracking-[0.18em] text-accent">
                        AI
                      </div>
                    ) : null}

                    <div
                      className={`max-w-[82%] rounded-[1.4rem] px-4 py-3 text-[14px] leading-7 ${
                        message.role === "user"
                          ? "rounded-tr-sm bg-[linear-gradient(135deg,rgba(247,229,198,0.98),rgba(214,154,77,0.92),rgba(149,93,43,0.92))] text-[#21170f] shadow-[0_20px_38px_rgba(120,78,37,0.26)]"
                          : "rounded-tl-sm border border-white/10 bg-white/[0.04] text-white/78"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>

                      {message.hasHTML ? (
                        <button
                          type="button"
                          onClick={() => setActiveTab("preview")}
                          className="mt-3 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[12px] font-medium text-accent-strong hover:bg-accent/14"
                        >
                          打开预览
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}

                {loading ? (
                  <div className="flex gap-3">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(244,218,179,0.2),rgba(214,154,77,0.18))] text-xs font-semibold tracking-[0.18em] text-accent">
                      AI
                    </div>
                    <div className="flex items-center gap-2 rounded-[1.4rem] rounded-tl-sm border border-white/10 bg-white/[0.04] px-4 py-4">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="h-2.5 w-2.5 rounded-full bg-accent/80 animate-[pulse-soft_1.4s_ease-in-out_infinite]"
                          style={{ animationDelay: `${dot * 140}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {messages.length === 1 ? (
              <div className="border-t border-white/8 px-4 py-4 md:px-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="micro-label text-white/40">Quick Prompts</p>
                  <p className="text-[12px] text-white/42">点击即可直接生成</p>
                </div>
                <div className="grid gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        void sendMessage(suggestion);
                      }}
                      className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-[13px] leading-6 text-white/66 hover:border-accent/30 hover:bg-white/[0.05] hover:text-white/84"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="border-t border-white/8 px-4 py-4 md:px-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="例如：我是 UI 设计师，想做一个黑金极简但有品牌感的个人网站，首屏突出代表项目和方法论。"
                  className="max-h-[220px] min-h-[72px] w-full resize-none bg-transparent px-1 py-1 text-[14px] leading-7 text-white outline-none placeholder:text-white/28"
                />

                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-[12px] text-white/36">
                    Shift + Enter 换行，Enter 直接发送
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      void sendMessage(input);
                    }}
                    disabled={!input.trim() || loading}
                    className="btn-primary min-w-[110px] px-4 py-2.5 text-[13px] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    生成网页
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`surface min-h-[32rem] flex-col overflow-hidden rounded-[2rem] ${
              showPreview ? "flex" : "hidden xl:flex"
            }`}
          >
            <div className="border-b border-white/8 px-5 py-4 md:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="micro-label text-white/46">Live Preview</p>
                  <p className="mt-2 text-sm text-white/68">
                    生成成功后会自动切到预览，你也可以下载或复制 HTML 继续迭代。
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={copyHTML}
                    disabled={!hasPreview}
                    className="btn-secondary px-4 py-2.5 text-[13px] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {copyState === "done"
                      ? "已复制"
                      : copyState === "error"
                        ? "复制失败"
                        : "复制 HTML"}
                  </button>
                  <button
                    type="button"
                    onClick={downloadHTML}
                    disabled={!hasPreview}
                    className="btn-primary px-4 py-2.5 text-[13px] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    下载 HTML
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-hidden bg-[#05080f]">
              {hasPreview ? (
                <iframe
                  title="Portfolio preview"
                  srcDoc={generatedHTML}
                  sandbox="allow-scripts allow-modals"
                  className="h-full w-full border-0 bg-white"
                />
              ) : (
                <iframe
                  title="Empty preview"
                  srcDoc={EMPTY_PREVIEW_HTML}
                  sandbox="allow-scripts"
                  className="h-full w-full border-0 bg-white"
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
