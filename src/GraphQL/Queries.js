import react from 'react';
import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query {
    allProgram {
      title
      workouts {
        Workout {
          title
          calories
          duration
          image {
            asset {
              originalFilename
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_PROGRAMMS = gql`
  query {
    allProgram {
      title
      _id
      slug {
        current
      }
    }
  }
`;

export const GET_PROGRAM_BY_SLUG = gql`
  query($slug: String!) {
    allProgram(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      focus
      difficulty
      duration
      description
      slug {
        current
      }
      workouts {
        Workout {
          title
          calories
          categories
          duration
        }
      }
    }
  }
`;
