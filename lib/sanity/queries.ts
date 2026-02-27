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
    organizer,
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
    directions,
    heroTitle,
    heroSubtitle,
    stats,
    aboutExcerpt,
    joinUsText
  }
`;

export const latestPublicationQuery = groq`
  *[_type == "publication"] | order(year desc)[0] {
    _id,
    title,
    authors,
    year,
    venue,
    link,
    type
  }
`;

export const globalSearchQuery = groq`
  *[
    (_type in ["member", "publication", "news", "research", "event"]) &&
    (
      name match $searchTerm ||
      title match $searchTerm ||
      description match $searchTerm ||
      bio match $searchTerm ||
      authors match $searchTerm ||
      venue match $searchTerm ||
      excerpt match $searchTerm ||
      category match $searchTerm ||
      tags match $searchTerm ||
      keywords match $searchTerm ||
      speaker match $searchTerm
    )
  ] {
    _id,
    _type,
    "title": coalesce(title, name),
    "description": coalesce(description, bio, excerpt, summary, ""),
    "link": select(
      _type == "member" => "/members#" + _id,
      _type == "publication" => "/publications#" + _id,
      _type == "news" => "/news#" + _id,
      _type == "research" => "/research#" + _id,
      _type == "event" => "/events#" + _id,
      "/"
    ),
    "date": coalesce(publishedAt, startDate, year),
    "category": coalesce(category, role, type, status)
  }
`;

