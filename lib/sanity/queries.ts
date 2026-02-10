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
