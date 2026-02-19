import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { safeFetchSingleton } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { SiteSettings } from "@/types/sanity";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
    const settings = await safeFetchSingleton<SiteSettings>(siteSettingsQuery);
    const title = settings?.title || "AI & NLP Research Lab";
    const description =
        settings?.description ||
        "Advancing artificial intelligence and natural language processing through innovative research.";

    return {
        title: `${title} - Korea University`,
        description,
        keywords: ["AI", "NLP", "Machine Learning", "Deep Learning", "Research Lab", "Korea University"],
        authors: [{ name: title }],
        openGraph: { title, description, type: "website" },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
