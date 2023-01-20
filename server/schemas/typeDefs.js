const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Trip {
    _id: ID!
    location: String!
    note: String!
  }

  type Query {
    me: User
    trips: [Trip]
    trip(tripId: ID!): Trip
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTrip(location: String!, note: String!): Trip
    removeTrip(tripId: ID!): Trip
  }
`;

module.exports = typeDefs;
