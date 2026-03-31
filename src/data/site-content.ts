export type NavLink = {
  href: string;
  label: string;
};

export type JourneyItem = {
  phase: string;
  period: string;
  title: string;
  summary: string;
  abilities: string[];
  connection: string;
};

export type CapabilityItem = {
  index: string;
  title: string;
  description: string;
  focus: string;
};

export type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  role: string;
  highlight: string;
  tags: string[];
  links: {
    detail?: string;
    source?: string;
    demo?: string;
  };
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  hint: string;
  href?: string;
};

export const siteContent = {
  seo: {
    title: "马康谊 | 角色叙事网页",
    description:
      "一版以复古肖像 IP 为主角的个人品牌页面，展示人物气质提炼、网页叙事与 AI 辅助实现能力。",
    keywords: [
      "马康谊",
      "角色IP",
      "视觉叙事",
      "个人品牌网站",
      "网页设计",
      "AI 建站",
      "肖像主视觉",
      "氛围设计",
    ],
    url: "https://phi-roan-60.vercel.app",
  },

  identity: {
    name: "马康谊",
    englishName: "Ma Kangyi",
    role: "把人物主角、页面氛围与叙事结构编织成完整首页体验的创作者",
    label: "CHARACTER-LED PORTFOLIO",
    intro:
      "我想把网页从“信息容器”做成“有主角的场景”。这次的新页面就用一位复古花园少女作为视觉核心，让角色气质、页面氛围和作品表达彼此咬合，而不是各自分离。",
    currentFocus:
      "现在我更关注人物 IP、氛围配色、页面叙事和 AI 快速实现之间的连接，希望做出一眼能被记住的品牌首页和作品页。",
    highlights: [
      "把一张人物图发展成整页视觉中心",
      "让文案、布局和配色围绕主角统一表达",
      "兼顾美感、信息层级和浏览节奏",
      "用 AI 与前端工具更快把想法做成作品",
    ],
    workflow: ["提炼主角气质", "搭建页面舞台", "让内容围绕角色展开", "打磨成可浏览作品"],
    quickStats: [
      { label: "视觉方向", value: "复古油画" },
      { label: "主角关键词", value: "花园 / 丝带 / 少女" },
      { label: "当前实验", value: "IP 叙事网页" },
    ],
  },

  navigation: [
    { href: "#journey", label: "角色路径" },
    { href: "#capabilities", label: "能力结构" },
    { href: "#projects", label: "项目展示" },
    { href: "#skills", label: "技能与工具" },
    { href: "#about", label: "关于我" },
    { href: "#contact", label: "联系方式" },
  ] satisfies NavLink[],

  journey: [
    {
      phase: "阶段 01",
      period: "人物气质提炼",
      title: "先让主角成立，再决定页面要说什么",
      summary:
        "这次我先从人物气质出发，提炼出丝带、花园、旧金框与奶油白这些关键信号，让主视觉在第一眼就成立。",
      abilities: ["角色气质提炼", "视觉锚点选择", "首屏记忆点设计"],
      connection:
        "当主角先成立，后面的标题、配色和信息布局才有清晰依据。",
    },
    {
      phase: "阶段 02",
      period: "页面舞台搭建",
      title: "让页面像舞台一样服务主角，而不是和主角争抢注意力",
      summary:
        "布局、留白、层次和按钮都往角色中心靠拢，让浏览者先记住主角，再继续理解后续内容。",
      abilities: ["布局节奏", "信息聚焦", "首屏叙事"],
      connection:
        "页面不再只是信息列表，而是一个能承接情绪和记忆点的观看顺序。",
    },
    {
      phase: "阶段 03",
      period: "叙事元素编排",
      title: "把花朵、旧金、雾感和文字节奏编成统一语言",
      summary:
        "我不想只换一张图，而是把色板、标签、材质、动效和卡片语气一起调整，让视觉语言完整闭环。",
      abilities: ["色彩系统", "材质细节", "信息语气统一"],
      connection:
        "这样角色不只是插图，而会成为整站真正的叙事中心。",
    },
    {
      phase: "阶段 04",
      period: "继续扩展世界观",
      title: "后续还可以从一个主角继续长出更多页面和设定",
      summary:
        "角色设定确定后，未来无论继续做系列海报、作品页、世界观设定页，还是社媒视觉，都有了可扩展的方向。",
      abilities: ["AI 辅助实现", "网页搭建", "系列化扩展"],
      connection:
        "这也是我想持续发展的方向：让一个角色带着整套视觉表达继续生长。",
    },
  ] satisfies JourneyItem[],

  capabilities: [
    {
      index: "01",
      title: "人物气质提炼",
      description:
        "先判断角色最该被记住的气质，再决定页面该往哪种情绪和观看体验上收束。",
      focus: "适合主视觉选择、角色调性与首页气氛定调。",
    },
    {
      index: "02",
      title: "页面叙事编排",
      description:
        "我会让标题、按钮、信息卡和装饰元素一起服务主角，不让页面变成互相打架的拼贴。",
      focus: "适合首页、落地页、作品页的观看顺序重构。",
    },
    {
      index: "03",
      title: "氛围配色与材质",
      description:
        "配色不只是好看，而是要把旧金、奶油白、花园绿和深墨蓝组织成稳定的视觉语言。",
      focus: "适合品牌气质统一、材质细节和卡片样式设计。",
    },
    {
      index: "04",
      title: "AI 辅助快速落地",
      description:
        "当人物设定和情绪方向明确后，我会用 AI 与前端工具快速把它落成一版可浏览、可继续迭代的页面。",
      focus: "适合概念页、实验页和轻量品牌官网快速成型。",
    },
  ] satisfies CapabilityItem[],

  projects: [
    {
      name: "复古肖像 IP 首页概念",
      category: "角色主视觉 / 首页叙事",
      summary:
        "让一张肖像不只是装饰图，而是成为整页视觉锚点，带动标题、配色和卡片语气一起改变。",
      role: "我负责角色定位、主视觉处理、首屏布局与页面语气统一。",
      highlight:
        "亮点在于页面不再依赖抽象图形撑气质，而是让人物本身成为最强记忆点。",
      tags: ["角色主视觉", "首屏叙事", "氛围构图"],
      links: {
        detail: undefined,
        source: undefined,
        demo: undefined,
      },
    },
    {
      name: "花园主题视觉系统",
      category: "视觉语言 / 细节统一",
      summary:
        "从花朵、丝带、旧金框和奶油蓝里提炼出一套更统一的页面语言，让每个组件都和主角同世界观。",
      role: "我负责色板、组件样式、局部装饰和整体气氛校准。",
      highlight:
        "亮点在于它不是简单换皮，而是从人物图里倒推出整个站点的视觉系统。",
      tags: ["色彩系统", "材质感", "品牌氛围"],
      links: {
        detail: undefined,
        source: undefined,
        demo: undefined,
      },
    },
    {
      name: "角色世界观延展预留",
      category: "系列化表达 / 后续拓展",
      summary:
        "在首页调性稳定后，后续可以继续扩展故事页、作品页、角色档案页和社媒视觉素材。",
      role: "我负责结构规划、扩展方向设计与后续页面语言控制。",
      highlight:
        "亮点在于一位主角可以长出整套连续表达，而不是只停在单页惊艳。",
      tags: ["系列页面", "世界观", "内容扩展"],
      links: {
        detail: undefined,
        source: undefined,
        demo: undefined,
      },
    },
  ] satisfies ProjectItem[],

  skillGroups: [
    {
      title: "角色与视觉",
      description: "先把人物气质立住，再让页面跟着她说话。",
      items: ["角色设定", "气质拆解", "版式构图", "视觉节奏", "场景氛围"],
    },
    {
      title: "叙事与内容",
      description: "内容不是堆叠，而是围绕主角展开的观看路径。",
      items: ["叙事文案", "页面编排", "信息聚焦", "标签语气", "内容层次"],
    },
    {
      title: "实现与推进",
      description: "让概念页能快速被做出来并继续扩展。",
      items: ["组件整理", "视觉校准", "节奏打磨", "快速验证", "前端落地"],
    },
    {
      title: "AI 与建站工具",
      description: "用熟悉的工具把人物感和页面感尽快落地。",
      items: ["AI 生成辅助", "Next.js", "TypeScript", "Tailwind CSS", "视觉实验"],
    },
  ] satisfies SkillGroup[],

  about: {
    text:
      "我更想做那种一打开就有气质、有主角、有叙事的页面。对我来说，网页不是把信息排整齐就结束了，而是要让人愿意停下来，多看一眼，并且把某种感觉记住。这次围绕一张复古肖像做整站，也是在继续验证这条方向。",
    principles: [
      "先让主角成立，再决定页面怎么说话。",
      "让视觉、文案和信息层级站在同一边。",
      "用更轻的工具，更快把一版完整气氛做出来。",
    ],
  },

  contact: {
    intro:
      "如果你也想把品牌页、作品集或角色概念做得更有主角感，欢迎联系我一起继续往下做。",
    items: [
      {
        label: "电话",
        value: "15936513893",
        hint: "常用联系电话",
        href: "tel:15936513893",
      },
      {
        label: "邮箱",
        value: "makangyi88@gmail.com",
        hint: "常用联系邮箱",
        href: "mailto:makangyi88@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/1250901657-hash",
        hint: "我的 GitHub 主页",
        href: "https://github.com/1250901657-hash",
      },
      {
        label: "其他社交",
        value: "待补充",
        hint: "可替换为小红书、即刻、LinkedIn 等",
      },
    ] satisfies ContactItem[],
    resumeLabel: "索取作品集 PDF",
  },
} as const;
