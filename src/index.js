const { ApolloServer, gql } = require('apollo-server');

// Toda request é POST
// Toda request bate no MESMO endpoint (/graphql)

// Query => obter informações (GET)
// Mutation => Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types => String, Int, Boolean, Float e ID

const typeDefs = gql`
  type User {
    _id: ID!
    nome: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello World',
    users: () => [
      { _id: String(Math.random()), name: 'John', email: 'john@example.com', active: true },
      { _id: String(Math.random()), name: 'Deko', email: 'deko@example.com', active: false },
      { _id: String(Math.random()), name: 'Mina', email: 'mina@example.com', active: true },
      { _id: String(Math.random()), name: 'Pepe', email: 'pepe@example.com', active: false },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`:fire: Server started at ${url}`));
