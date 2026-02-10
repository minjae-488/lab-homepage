import { safeFetch } from '@/lib/sanity/client';
import { publicationsQuery } from '@/lib/sanity/queries';
import { Publication } from '@/types/sanity';
import PublicationsList from './PublicationsList';



export default async function PublicationsPage() {
    const publications: Publication[] = await safeFetch(publicationsQuery);

    return <PublicationsList publications={publications} />;
}
