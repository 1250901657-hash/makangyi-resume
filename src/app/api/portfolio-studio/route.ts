import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `你是一位顶级的网页设计师和前端工程师，专注于制作令人惊叹的个人作品集/简历网页。

用户会用中文描述他们的需求、风格偏好、个人信息等。你需要：
1. 根据用户描述，生成一份完整、美观、可直接使用的 HTML 网页代码
2. 代码必须是完整的单文件 HTML，包含内联 CSS 和 JS
3. 设计要有高级感、独特性，避免模板化
4. 支持响应式布局
5. 可使用 Google Fonts（通过 CDN）和动画效果

风格要求：
- 避免使用 Inter, Roboto, Arial 等通用字体
- 颜色搭配要有品位，不要用紫色渐变白色背景这类俗气方案
- 版式要有层次感和视觉冲击力
- 加入微动画和悬停效果

你的回复格式必须严格遵守：
先用1-2句话简短描述设计方向，然后直接输出完整 HTML 代码，用 \`\`\`html 和 \`\`\` 包裹。
不要在代码块之后添加任何解释文字。`;

type StudioMessage = {
  role: "assistant" | "user";
  content: string;
};

function isStudioMessage(value: unknown): value is StudioMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<StudioMessage>;

  return (
    (candidate.role === "assistant" || candidate.role === "user") &&
    typeof candidate.content === "string" &&
    candidate.content.trim().length > 0
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "缺少 ANTHROPIC_API_KEY。请在 .env.local 中配置后重启开发服务器。",
      },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => null)) as { messages?: unknown } | null;
  const messages = Array.isArray(body?.messages) ? body.messages.filter(isStudioMessage) : [];

  if (!messages.length) {
    return NextResponse.json(
      {
        error: "没有收到可用的对话内容，请重新描述你的需求。",
      },
      { status: 400 },
    );
  }

  const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-20250514",
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  const payload = (await anthropicResponse.json().catch(() => null)) as
    | {
        content?: Array<{ type?: string; text?: string }>;
        error?: { message?: string };
      }
    | null;

  if (!anthropicResponse.ok) {
    return NextResponse.json(
      {
        error: payload?.error?.message || "模型请求失败，请稍后重试。",
      },
      { status: anthropicResponse.status },
    );
  }

  const text = payload?.content
    ?.filter((block) => block.type === "text" && typeof block.text === "string")
    .map((block) => block.text?.trim())
    .filter(Boolean)
    .join("\n\n");

  if (!text) {
    return NextResponse.json(
      {
        error: "模型返回了空结果，请重新描述一次需求。",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ text });
}
