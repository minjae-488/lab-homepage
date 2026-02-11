import groq from 'groq';

export const membersQuery = groq`
  *[_type == "member"] | order(order asc) {
    _id,
    name,
    role,
    degree,
    "imageUrl": image.asset->url,
    bio,
    email,
    researchInterest,
    links
  }
`;

export const publicationsQuery = groq`
  *[_type == "publication"] | order(year desc) {
    _id,
    title,
    authors,
    year,
    venue,
    link,
    "pdfUrl": pdf.asset->url,
    "imageUrl": image.asset->url,
    type,
    doi
  }
`;

export const newsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "date": publishedAt,
    excerpt,
    "imageUrl": image.asset->url,
    category,
    tags,
    link
  }
`;

export const latestNewsQuery = groq`
  *[_type == "news"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    "date": publishedAt,
    excerpt,
    category,
    link
  }
`;

export const researchProjectsQuery = groq`
  *[_type == "research"] | order(startDate desc) {
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    status,
    startDate,
    endDate,
    fundingAgency,
    keywords,
    relatedPublications[]->{
      _id,
      title,
      year,
      venue,
      link
    }
  }
`;

export const featuredResearchQuery = groq`
  *[_type == "research" && status == "ongoing"] | order(startDate desc)[0...3] {
    _id,
    title,
    description,
    "imageUrl": mainImage.asset->url,
    status
  }
`;

export const eventsQuery = groq`
  *[_type == "event"] | order(startDate asc) {
    _id,
    title,
    type,
    startDate,
    endDate,
    location,
    speaker,
    description,
    registrationLink,
    tags
  }
`;

export const professorQuery = groq`
  *[_type == "professor"][0] {
    _id,
    name,
    title,
    "imageUrl": image.asset->url,
    greeting,
    email,
    researchInterests,
    education,
    career,
    awards
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    institution,
    description,
    "logoUrl": logo.asset->url,
    email,
    phone,
    address,
    officeHours,
    socialLinks,
    footerText,
    contactMessage,
    googleMapsUrl,
    directions
  }
`;
