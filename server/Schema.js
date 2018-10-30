// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express';
// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './Types.js';
import RESOLVERS from './Resolvers.js';
// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'default'
    }
  }
});
// Exports
export default SERVER;