import { safeFetch } from '@/lib/sanity/client';
import { newsQuery } from '@/lib/sanity/queries';
import { NewsItem } from '@/types/sanity';
import NewsList from './NewsList';
import { draftMode } from 'next/headers';

export const revalidate = 10;

export default async function NewsPage() {
    const { isEnabled } = draftMode();
    const news: NewsItem[] = await safeFetch(newsQuery, {}, isEnabled);

    return <NewsList news={news} />;
}
