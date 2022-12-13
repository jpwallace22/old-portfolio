export const imageFrag = `
  fragment imageFrag on FileField {
    __typename
    id
    alt
    blurhash
    height
    width
    url
  }
`;

export const structuredTextImage = `
  fragment structuredTextImage on ImageRecord {
    id
    media {
      title
      ...imageFrag
    }
  }
`;

export const buttonFrag = `
  fragment buttonFrag on ButtonRecord {
    __typename
    id
    internalName
    disabled
    icon
    id
    title
    url
  }
`;

export const caseStudyCardFrag = `
  fragment caseStudyCardFrag on CaseStudyCardRecord {
    __typename
    id
    internalName
    image {
      ...imageFrag
    }
    body {
      value
    }
  }
`;

export const testimonialCardFrag = `
  fragment testimonialCardFrag on TestimonialCardRecord {
    __typename
    id
    internalName
    quote {
      value
    }
    person {
      ...personFrag
    }
  }
`;

export const personFrag = `
  fragment personFrag on PersonRecord {
    __typename
    id
    internalName
    firstName
    lastName
    website
    company {
      ...companyFrag
    }
    role
    thumbnail {
      ...imageFrag
    }
  }
`;

export const companyFrag = `
  fragment companyFrag on CompanyRecord {
    __typename
    id
    internalName
    name
    website
    logo {
      ...imageFrag
    }
  }
`;

export const techFrag = `
  fragment techFrag on TechStackRecord {
    __typename
    id
    internalName
    title
    thumbnail {
      ...imageFrag
    }
  }
`;

export const switchBackFrag = `
  fragment switchBackFrag on SwitchbackRecord {
    __typename
    id
    internalName
    reverse
    heading
    headingAs
    body {
      value
    }
    image {
      ...imageFrag
    }
    buttons {
      ...buttonFrag
    }
  }
`;

export const categoryFrag = `
  fragment categoryFrag on CategoryRecord {
    __typename
    id
    internalName
    name
    slug
  }
`;

export const workFrag = `
  fragment workFrag on WorkRecord {
    __typename
    id
    internalName
    seo {
      description
      title
      image {
        ...imageFrag
      }
    }
    title
    subtitle
    heading
    body {
      value
      blocks
    }
    information {
      value
      blocks
    }
    bannerImage {
      ...imageFrag
    }
    ctas {
      ...buttonFrag
    }
    techStack {
      ...techFrag
    }
    slider {
      ...caseStudyCardFrag
    }
  }
  ${buttonFrag}
  ${techFrag}
  ${caseStudyCardFrag}
  ${imageFrag}
`;

export const blogPostFrag = `
  fragment blogPostFrag on BlogPostRecord {
    __typename
    id
    internalName
    seo {
      description
      title
      image {
        ...imageFrag
      }
    }
    title
    subtitle
    publishDate
    slug
    categories {
      ...categoryFrag
    }
    body {
      value
      blocks {
        ...structuredTextImage
      }
    }
    featuredImage {
      ...imageFrag
    }
  }
  ${structuredTextImage}
  ${categoryFrag}
  ${imageFrag}
`;

export const blogCardFrag = `
  fragment blogCardFrag on BlogPostRecord {
    __typename
    id
    internalName
    title
    publishDate
    slug
    categories {
      ...categoryFrag
    }
    body {
      value
    }
    featuredImage {
      ...imageFrag
    }
    excerpt {
      value
    }
  }
  ${categoryFrag}
  ${imageFrag}
`;

export const blogPageFrag = `
  fragment blogPageFrag on BlogPageRecord {
    __typename
    id
    seo {
      description
      title
      image {
        ...imageFrag
      }
    }
    switchback {
      ...switchBackFrag
    }
  }
  ${buttonFrag}
  ${switchBackFrag}
`;
