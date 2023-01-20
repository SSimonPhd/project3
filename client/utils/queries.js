import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      }
    }
`;

export const GET_TRIPS = gql`
  {
    trips {
      _id
      location
      note
    }
  }
`;

export const GET_TRIP = gql`
  {
    trip {
      _id
      location
      note
    }
  }
`;

