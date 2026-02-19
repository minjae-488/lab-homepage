import { Header, Footer } from "@/components/layout";
import { safeFetchSingleton } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { SiteSettings } from "@/types/sanity";

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const settings = await safeFetchSingleton<SiteSettings>(siteSettingsQuery);

    return (
        <div className="flex flex-col min-h-screen">
            <Header settings={settings} />
            <main className="flex-grow">{children}</main>
            <Footer settings={settings} />
        </div>
    );
}
