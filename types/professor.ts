export interface Education {
    degree: string;
    major: string;
    university: string;
    year: number;
}

export interface Career {
    position: string;
    institution: string;
    startYear: number;
    endYear?: number;
}

export interface Award {
    title: string;
    organization: string;
    year: number;
}

export interface Professor {
    name: string;
    title: string;
    department: string;
    university: string;
    email: string;
    phone?: string;
    imageUrl: string;
    greeting: string;
    education: Education[];
    career: Career[];
    awards: Award[];
    researchInterests: string[];
}
