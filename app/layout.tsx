import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { safeFetchSingleton } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { SiteSettings } from "@/types/sanity";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
    const settings = await safeFetchSingleton<SiteSettings>(siteSettingsQuery);
    const title = settings?.title || "AI & NLP Research Lab";
    const description = settings?.description || "Advancing artificial intelligence and natural language processing through innovative research.";

    return {
        title: `${title} - Korea University`,
        description: description,
        keywords: ["AI", "NLP", "Machine Learning", "Deep Learning", "Research Lab", "Korea University"],
        authors: [{ name: title }],
        openGraph: {
            title: title,
            description: description,
            type: "website",
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // middleware.ts가 x-pathname 헤더를 주입해줌
    const pathname = headers().get("x-pathname") ?? "";
    const isStudio = pathname.startsWith("/studio");

    const settings = isStudio
        ? null
        : await safeFetchSingleton<SiteSettings>(siteSettingsQuery);

    return (
        <html lang="ko">
            <body className={inter.className}>
                {isStudio ? (
                    // /studio 경로: Header/Footer 없이 Studio만 전체화면으로
                    <>{children}</>
                ) : (
                    <div className="flex flex-col min-h-screen">
                        <Header settings={settings} />
                        <main className="flex-grow">{children}</main>
                        <Footer settings={settings} />
                    </div>
                )}
            </body>
        </html>
    );
}
