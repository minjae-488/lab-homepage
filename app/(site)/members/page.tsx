import { safeFetch } from '@/lib/sanity/client';
import { membersQuery } from '@/lib/sanity/queries';
import { Member } from '@/types/sanity';
import { draftMode } from 'next/headers';
import MembersClient from './MembersClient';

export const revalidate = 10;

export default async function MembersPage() {
    const { isEnabled } = draftMode();
    const members: Member[] = await safeFetch(membersQuery, {}, isEnabled);

    return <MembersClient members={members} />;
}
