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
            {/* Visual Editing: Studio iframe 안에서만 활성화됨 */}
            <VisualEditing />
            {/* 미리보기 모드 배너 */}
            {isEnabled && <DraftModeBanner />}
        </div>
    );
}
