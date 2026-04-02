import type { Metadata } from "next";

import { PortfolioStudio } from "@/components/portfolio-studio";

export const metadata: Metadata = {
  title: "Portfolio Studio | 马康谊",
  description: "通过对话生成完整个人作品集 HTML 的独立工作台。",
};

export default function StudioPage() {
  return <PortfolioStudio />;
}
