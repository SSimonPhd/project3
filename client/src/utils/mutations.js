import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        email
        }
      }
    }
`;

export const ADD_TRIP = gql`
  mutation addTrip(
    $location: String!
    $note: String!
  ) {
    addTrip(
      location: $location
      note: $note
    ) {
        location
        note
    }
  }
`;

export const REMOVE_TRIP = gql`
  mutation removeTrip($tripId: ID!) {
    removeTrip(tripId: $tripId) {
      _id
    }
  }
`

export const UPDATE_TRIP = gql`
    mutation updateTrip(
    $location: String!
    $note: String!
  ) {
    updateTrip(
      location: $location
      note: $note
    ) {
      token 
      trip{
        location
        note
      }
    }
  }
`