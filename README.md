# 马康谊在线简历网站

一个基于 Next.js、TypeScript 和 Tailwind CSS 搭建的单页个人简历网站，用来展示马康谊从美工、电商、工厂 PE 到 vibecoding 的复合型经历。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看页面。

如果你想使用聊天生成网页的工作台，还需要创建 `.env.local`：

```bash
cp .env.example .env.local
```

然后填写：

```bash
ANTHROPIC_API_KEY=your_anthropic_api_key
ANTHROPIC_MODEL=claude-sonnet-4-20250514
```

启动后访问 `http://localhost:3000/studio`。

## 生产构建

```bash
npm run build
npm run start
```

## 可替换内容

站点主要内容集中在 `src/data/site-content.ts`，后续你可以优先替换：

- Hero 文案
- 经历路径说明
- 项目卡片内容与链接
- 联系方式
- SEO 地址与描述

## 部署建议

推荐部署到 Vercel：

1. 将代码推送到 GitHub。
2. 在 Vercel 导入仓库。
3. 默认识别 Next.js 项目并自动构建。
4. 部署后把 `src/data/site-content.ts` 中的站点地址替换成真实域名。
