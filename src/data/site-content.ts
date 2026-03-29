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
    title: "马康谊 | 个人品牌网站",
    description:
      "马康谊的个人品牌网站，围绕设计感、展示逻辑、流程理解与 AI 快速实现，呈现更鲜明的数字作品表达。",
    keywords: [
      "马康谊",
      "个人简历网站",
      "在线简历",
      "电商展示",
      "工厂PE",
      "vibecoding",
      "AI 建站",
      "个人品牌",
    ],
    url: "https://phi-roan-60.vercel.app",
  },

  identity: {
    name: "马康谊",
    englishName: "Ma Kangyi",
    role: "Design, display, AI build.",
    label: "SYSTEM ONLINE",
    heroWords: ["VISUAL", "LOGIC."],
    intro: "把展示做清楚，把想法做出来。",
    currentFocus: "Short digital spaces with strong hierarchy and motion.",
    frameLabel: "FIG. 01 / PROFILE",
    quickStats: [
      { label: "DISPLAY", value: "清楚" },
      { label: "BUILD", value: "快速" },
      { label: "STYLE", value: "有辨识度" },
    ],
  },

  navigation: [
    { href: "#work", label: "WORK" },
    { href: "#contact", label: "CONTACT" },
  ] satisfies NavLink[],

  journey: [
    {
      phase: "阶段 01",
      period: "从视觉出发",
      title: "美工经历让我建立了对画面、版式与表达的敏感度",
      summary:
        "最早接触的是视觉层面的工作，这段经历让我知道页面不只是把信息放上去，而是要让重点更清楚、节奏更自然、内容更容易被理解。",
      abilities: ["基础视觉表达", "页面排版感", "信息层级意识"],
      connection:
        "这成为我后面做电商页面、内容展示与网页设计时最稳定的底层能力。",
    },
    {
      phase: "阶段 02",
      period: "理解展示与转化",
      title: "电商经历让我更关注展示逻辑，而不只是视觉完成度",
      summary:
        "做电商后，我开始更在意用户为什么会停留、为什么会理解、为什么愿意继续往下看。页面的任务不只是好看，而是要帮助产品价值被更快看懂。",
      abilities: ["卖点梳理", "电商展示逻辑", "用户理解与信息组织"],
      connection:
        "它让我从“做图”进一步走向“做有效表达”，也让我更适合做面向业务结果的页面。",
    },
    {
      phase: "阶段 03",
      period: "从页面走向流程",
      title: "工厂 PE 的经历补上了我对流程、协作与落地的理解",
      summary:
        "进入工厂与 PE 场景后，我开始用流程和执行的视角看问题。很多事情不是想法不好，而是流程没理顺、信息没对齐、执行链路不够清晰。",
      abilities: ["流程梳理", "执行落地意识", "跨岗位协作理解"],
      connection:
        "这让我现在做网页、原型或内容时，会同时考虑可操作性，而不只停留在概念层。",
    },
    {
      phase: "阶段 04",
      period: "把经验变成作品",
      title: "vibecoding 让我开始把复合经验快速转成可见、可用的数字作品",
      summary:
        "现在我正在使用 AI 与代码工具，把过去积累的判断力更快地落到网页、原型、内容实验与个人项目里。重点不在炫技，而在于更快完成从想法到结果的闭环。",
      abilities: ["AI 辅助实现", "网页搭建", "快速原型与验证"],
      connection:
        "这也是我想持续发展的方向：用更轻的方式，做更完整、更有表达力的作品。",
    },
  ] satisfies JourneyItem[],

  capabilities: [
    {
      index: "01",
      title: "视觉与内容表达",
      description:
        "把零散信息压成更清楚的版式，让页面有节奏，也有重点。",
      focus: "页面排版、卖点呈现、内容重组。",
    },
    {
      index: "02",
      title: "电商展示与用户理解",
      description:
        "不只追求好看，更会考虑用户先看到什么、怎么继续往下看。",
      focus: "详情页、落地页、产品展示。",
    },
    {
      title: "AI 工具与快速实现",
      index: "03",
      description:
        "用 AI 与代码工具把想法迅速做成可见页面，适合快速验证和个人品牌表达。",
      focus: "轻量建站、原型实验、视觉概念落地。",
    },
  ] satisfies CapabilityItem[],

  projects: [
    {
      name: "Brand Pages",
      category: "WORK.01",
      summary: "层级清楚，重点直接，气质够强。",
      role: "Layout / Direction",
      highlight: "展示页、落地页、个人页面。",
      tags: ["layout", "rhythm", "brand"],
    },
    {
      name: "AI Prototypes",
      category: "WORK.02",
      summary: "快速成型，把概念先做成能看的页面。",
      role: "Build / Motion",
      highlight: "Next.js、动效、实验表达。",
      tags: ["ai", "web", "motion"],
    },
  ] satisfies ProjectItem[],

  skillGroups: [
    {
      title: "视觉与设计",
      description: "围绕表达、排版和页面完成度，强调清晰与职业感。",
      items: ["页面排版", "信息层级", "卖点呈现", "视觉统一", "基础界面审美"],
    },
    {
      title: "电商与内容",
      description: "关注商品如何被理解，以及内容如何更有效地展示。",
      items: ["详情页结构", "展示逻辑", "内容整理", "用户视角", "页面叙事"],
    },
    {
      title: "流程与执行",
      description: "把复杂事情拆清楚，提升沟通效率与推进感。",
      items: ["流程梳理", "节点理解", "执行落地", "跨角色协作", "问题定位"],
    },
    {
      title: "AI 与建站工具",
      description: "用新的工具缩短制作周期，让想法更快落地。",
      items: ["vibecoding", "AI 辅助写作", "Next.js", "TypeScript", "Tailwind CSS"],
    },
  ] satisfies SkillGroup[],

  about: {
    text:
      "我不是从单一路线进入网页与产品表达的人。早期做美工，让我对视觉和版式形成敏感；做电商，让我更在意商品如何被理解和呈现；在工厂做 PE，让我学会从流程、协作与落地的视角看问题。现在我正在把这些经验与 AI、代码工具结合起来，希望做出更完整、更有效、也更有温度的作品。",
    principles: [
      "先理解问题，再决定页面怎么表达。",
      "重视可执行性，不停留在概念层。",
      "持续学习新工具，但始终服务于结果。",
    ],
  },

  contact: {
    intro: "想聊页面、合作或工作机会，可以直接联系我。",
    items: [
      {
        label: "PHONE",
        value: "15936513893",
        hint: "Direct",
        href: "tel:15936513893",
      },
      {
        label: "EMAIL",
        value: "makangyi88@gmail.com",
        hint: "Always open",
        href: "mailto:makangyi88@gmail.com",
      },
      {
        label: "GITHUB",
        value: "github.com/1250901657-hash",
        hint: "Recent work",
        href: "https://github.com/1250901657-hash",
      },
    ] satisfies ContactItem[],
    resumeLabel: "More on request",
  },
} as const;
