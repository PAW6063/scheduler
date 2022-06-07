const { gql } = require('apollo-server-express');

const typeDefs = gql`
    #This is a comment
    type User {
        _id: ID
        name: String!
    }

    type Query {
        user(id: ID!): User!
        users: [User!]!
    }

    type Mutation {
        addUser(name: String!): User!
    }
`;

module.exports = typeDefs;