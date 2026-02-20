import { safeFetch } from '@/lib/sanity/client';
import { publicationsQuery } from '@/lib/sanity/queries';
import { Publication } from '@/types/sanity';
import PublicationsList from './PublicationsList';
import { draftMode } from 'next/headers';

export const revalidate = 10;

export default async function PublicationsPage() {
    const { isEnabled } = draftMode();
    const publications: Publication[] = await safeFetch(publicationsQuery, {}, isEnabled);

    return <PublicationsList publications={publications} />;
}
