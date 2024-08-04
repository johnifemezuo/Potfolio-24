import { gql } from "@apollo/client";

export const SELECTED_PROJECT_QUERY = gql`
  query {
    projects {
      publishedAt
      id
      projectTitle
      projecType
      description
      slug
      introImage {
        url
      }
    }
    dribbleShot {
      image {
        url
      }
    }
  }
`;

export const PROJECT_QUERY = gql`
  query {
    projects {
      publishedAt
      id
      projectTitle
      description
      role
      duration
      livesite
      year
      platform
      introImage {
        url
      }
    }
    dribbleShot {
      image {
        url
      }
    }
  }
`;

export const OTHER_PROJECT_QUERY = gql`
  query getOtherProject($slug: String) {
    projects(where: { slug_not_contains: $slug }, first: 1) {
      publishedAt
      id
      projectTitle
      description
      role
      duration
      livesite
      platform
      introImage {
        url
      }
    }
  }
`;

export const PROJECT_DETAILS_QUERY = gql`
  query getProject($slug: String) {
    projects(where: { slug: $slug }) {
      publishedAt
      id
      projectTitle
      description
      projecType
      role
      duration
      year
      industry
      platform
      slug
      introImage {
        url
      }
      content {
        html
      }
      title1
      description1
      image1 {
        url
      }
      title2
      description2
      image2 {
        url
      }
      title3
      description3
      image3 {
        url
      }
      title4
      description4
      image4 {
        url
      }
      title5
      description5
      image5 {
        url
      }
      title6
      description6
      image6 {
        url
      }
      title7
      description7
      image7 {
        url
      }
      title8
      description8
      image8 {
        url
      }
      media1 {
        url
      }
      media2 {
        url
      }
      media3 {
        url
      }
      media4 {
        url
      }
      media5 {
        url
      }
    }
  }
`;
