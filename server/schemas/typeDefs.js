const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
#Models types
    type User {
        _id: ID
        permissionLevel: String
        createdAt: String
        firstName: String!
        lastName: String!
        phoneNumber: String
        email: String!
        password: String!
    }

#Queries
    type Query {
        user(id: ID!): User!
        users: [User!]!
    }

#Mutations
    type Mutation {
        addUser(permissionLevel: String, createdAt: String, firstName: String!, lastName: String!, phoneNumber: String, email: String!, password: String!): User!
    }
`;

module.exports = typeDefs;