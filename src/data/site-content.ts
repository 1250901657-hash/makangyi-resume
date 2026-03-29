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
    title: "马康谊 | 在线简历网站",
    description:
      "马康谊的个人简历型网站，围绕美工、电商、工厂 PE 与 vibecoding 的复合经历，展示审美、业务理解、流程落地与 AI 快速实现能力。",
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
    url: "https://example.vercel.app",
  },
  identity: {
    name: "马康谊",
    englishName: "Ma Kangyi",
    role: "马康谊",
    label: "ONLINE RESUME / PERSONAL BRAND",
    intro:
      "我经历过美工、电商、工厂 PE，到现在持续用 AI 与代码工具做网页、内容和原型。我的优势不是单一岗位技能，而是能把视觉表达、商业展示、流程理解和快速实现串成一条更完整的工作链路。",
    currentFocus:
      "现在的我，正在把过去积累的审美、商品展示意识与执行经验，转化成更轻、更快、更可验证的数字作品。",
    highlights: [
      "有审美，也知道信息该怎么被看见",
      "懂电商展示，不只会把页面做漂亮",
      "懂工厂流程，重视执行与落地",
      "会用 AI 与代码工具，把想法更快变成作品",
    ],
    workflow: ["理解问题", "梳理结构", "快速做出可见结果", "持续迭代到可交付"],
    quickStats: [
      { label: "核心经历", value: "4 段" },
      { label: "工作方法", value: "表达 + 业务 + 落地" },
      { label: "当前方向", value: "AI × 网页 × 内容" },
    ],
  },
  navigation: [
    { href: "#journey", label: "经历路径" },
    { href: "#capabilities", label: "我能做什么" },
    { href: "#projects", label: "项目展示" },
    { href: "#skills", label: "技能与工具" },
    { href: "#about", label: "关于我" },
    { href: "#contact", label: "联系方式" },
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
        "这也是我想持续发展的方向: 用更轻的方式，做更完整、更有表达力的作品。",
    },
  ] satisfies JourneyItem[],
  capabilities: [
    {
      index: "01",
      title: "视觉与内容表达",
      description:
        "我擅长把零散信息整理成更清晰的页面结构，让内容既有审美，也有阅读节奏。",
      focus: "适合页面排版、卖点呈现、内容结构优化。",
    },
    {
      index: "02",
      title: "电商展示与用户理解",
      description:
        "相比只做视觉，我更关注展示顺序、重点信息与用户理解路径，让页面更接近实际沟通与转化场景。",
      focus: "适合详情页、落地页、产品展示类内容。",
    },
    {
      index: "03",
      title: "流程优化与执行落地",
      description:
        "工厂 PE 的经历让我习惯从流程、协作和执行角度看问题，能把复杂事项拆成更可推进的结构。",
      focus: "适合流程梳理、信息整理、执行链路优化。",
    },
    {
      index: "04",
      title: "AI 工具与快速实现",
      description:
        "我正在把 AI 与代码工具作为日常工作方式的一部分，用更短的时间做出网页、原型和实验性作品。",
      focus: "适合个人项目、快速验证、轻量建站与内容实验。",
    },
  ] satisfies CapabilityItem[],
  projects: [
    {
      name: "电商展示页重构方案",
      category: "电商展示 / 页面表达",
      summary:
        "围绕商品卖点、场景感与信息顺序，重构一套更适合移动端阅读的展示页结构。",
      role: "我负责页面结构梳理、视觉呈现方向与内容展示逻辑整理。",
      highlight:
        "亮点在于把“堆信息”改成“先理解场景，再理解价值”，让展示更职业、更有说服力。",
      tags: ["详情页", "信息层级", "移动端体验"],
      links: { detail: undefined, source: undefined, demo: undefined },
    },
    {
      name: "AI 辅助网页与内容实验",
      category: "AI 应用 / vibecoding",
      summary:
        "结合 AI 与前端工具，快速完成个人网页、内容页面或原型实验，缩短从想法到呈现的时间。",
      role: "我负责信息架构、页面设计、文案组织与前端实现。",
      highlight:
        "亮点在于把复合背景转成可见成果，不靠空泛概念，而是直接交付一个可浏览、可继续迭代的页面。",
      tags: ["Next.js", "Tailwind CSS", "快速验证"],
      links: { detail: undefined, source: undefined, demo: undefined },
    },
    {
      name: "流程梳理与原型表达",
      category: "流程理解 / 原型实现",
      summary:
        "将复杂流程、零散需求或跨岗位沟通内容，整理成更清楚的结构文档或轻量页面原型。",
      role: "我负责流程拆解、信息归纳、结构表达与原型方向整理。",
      highlight:
        "亮点在于把“难讲清”的问题转换成“更容易理解和推进”的结果，帮助团队协作更顺畅。",
      tags: ["流程梳理", "结构化表达", "协作沟通"],
      links: { detail: undefined, source: undefined, demo: undefined },
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
      "我不是从单一路线进入网页与产品表达的人。早期做美工，让我对视觉和版式形成敏感；做电商，让我更在意商品怎样被理解和呈现；在工厂做 PE，让我学会用流程、协作与落地的视角看问题。现在我正在把这些经验和 AI、代码工具结合起来，希望做出更完整、更有效、也更有温度的作品。",
    principles: [
      "先理解问题，再决定页面怎么表达。",
      "重视可执行性，不停留在概念层。",
      "持续学习新工具，但始终服务于结果。",
    ],
  },
  contact: {
    intro:
      "如果你正在寻找兼具表达、业务理解与执行意识的人，欢迎联系我。无论是求职机会、合作交流，还是一起做点有意思的项目，我都很愿意进一步沟通。",
    items: [
      {
        label: "邮箱",
        value: "makangyi88@gmail.com",
        hint: "1250901657@qq.com",
      },
      {
        label: "GitHub",
        value: "github.com/your-handle",
        hint: "替换成你的 GitHub 主页",
      },
      {
        label: "其他社交",
        value: "your-social-link",
        hint: "可替换为小红书、即刻、LinkedIn 等",
      },
    ] satisfies ContactItem[],
    resumeLabel: "下载 PDF 简历",
  },
} as const;