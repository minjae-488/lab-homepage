import { Header, Footer } from "@/components/layout";
import { safeFetchSingleton } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { SiteSettings } from "@/types/sanity";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DraftModeBanner } from "@/components/DraftModeBanner";

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isEnabled } = draftMode();
    const settings = await safeFetchSingleton<SiteSettings>(siteSettingsQuery, {}, isEnabled);

    return (
        <div className="flex flex-col min-h-screen">
            <Header settings={settings} />
            <main className="flex-grow">{children}</main>
            <Footer settings={settings} />
            {/* Studio 미리보기 iframe 연결용 */}
            <VisualEditing />
            {/* Studio [미리보기] 탭 사용 시에만 표시 — 일반 방문자에겐 보이지 않음 */}
            {isEnabled && <DraftModeBanner />}
        </div>
    );
}
