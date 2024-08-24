import { gql } from "@apollo/client";

export const SELECTED_PROJECT_QUERY = gql`
  query {
    projects {
      publishedAt
      id
      projectTitle
      projectType
      description
      livesite
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
      projectType
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
    projects(where: { slug_not_contains: $slug }, first: 2) {
      publishedAt
      id
      projectTitle
      description
      role
      duration
      projectType
      slug
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
      projectType
      role
      duration
      livesite
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
    }
  }
`;
