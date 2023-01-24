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
query Query($tripId: ID!) {
  trip(tripId: $tripId) {
    _id
    location
    note
  }
}
`;