const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String
  }

  type Query {
    users: [User]
  }
`;

const users = [
  {
    name: 'The Awakening',
  },
  {
    name: 'City of Glass',
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});