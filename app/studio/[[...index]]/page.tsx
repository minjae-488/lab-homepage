
import SanityStudio from './SanityStudio';

export const dynamic = 'force-static';

import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: 'Sanity Studio',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export function generateStaticParams() {
    return [{ index: [] }];
}

export default function StudioPage() {
    return <SanityStudio />;
}
