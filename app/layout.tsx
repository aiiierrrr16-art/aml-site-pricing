import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === "true"
      ? "https://aiiierrrr16-art.github.io/aml-site-pricing/"
      : "https://aml-site-pricing.aierer.chatgpt.site",
  ),
  title: "AML｜独立站设计与搭建服务报价",
  description: "Shopify 页面优化、AI 视觉与完整品牌站搭建服务报价。按阶段确认、按节点付款。",
  openGraph: {
    title: "AML｜独立站设计与搭建服务报价",
    description: "让网站更专业，也更能转化。Shopify 服务 ¥699 起。",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
