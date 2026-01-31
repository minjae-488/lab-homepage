export enum MemberRole {
    PI = 'PI',
    Postdoc = 'Postdoc',
    PhD = 'PhD',
    MS = 'MS',
    Undergrad = 'Undergrad'
}

export interface Member {
    id: string;
    name: string;
    role: MemberRole;
    degree?: string;
    researchInterest: string[];
    email: string;
    imageUrl: string;
    website?: string;
    linkedin?: string;
    joinDate?: string;
    bio?: string;
}

export interface MemberFilter {
    role?: MemberRole;
    keyword?: string;
}
