import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 100) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            updatedAt
            licenseInfo {
              name
            }
            primaryLanguage {
              name
            }
            stargazerCount
            url
          }
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($queryString: String!) {
    search(query: $queryString, type: USER, first: 100) {
      userCount
      edges {
        node {
          ... on User {
            id
            login
            name
            bio
            url
          }
        }
      }
    }
  }
`;
