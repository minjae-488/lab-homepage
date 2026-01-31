export enum ProjectStatus {
    Ongoing = 'ongoing',
    Completed = 'completed'
}

export interface ResearchProject {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    status: ProjectStatus;
    startDate?: string;
    endDate?: string;
    fundingAgency?: string;
    keywords?: string[];
    relatedPublications?: string[];
}
