import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI & NLP Research Lab - Korea University",
    description: "Official website of AI & NLP Research Laboratory at Korea University. Advancing artificial intelligence and natural language processing through innovative research.",
    keywords: ["AI", "NLP", "Machine Learning", "Deep Learning", "Research Lab", "Korea University"],
    authors: [{ name: "AI & NLP Research Lab" }],
    openGraph: {
        title: "AI & NLP Research Lab - Korea University",
        description: "Advancing artificial intelligence and natural language processing through innovative research",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

