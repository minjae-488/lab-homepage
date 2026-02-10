import { safeFetch } from '@/lib/sanity/client';
import { newsQuery } from '@/lib/sanity/queries';
import { NewsItem } from '@/types/sanity';
import NewsList from './NewsList';



export default async function NewsPage() {
    const news: NewsItem[] = await safeFetch(newsQuery);

    return <NewsList news={news} />;
}
