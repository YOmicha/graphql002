// Imports: GraphQL
import { gql } from 'apollo-server-express';
// GraphQL: TypeDefs
const TYPEDEFS = `
type Query {
    farms: [Farm]
    farm(age: Int): Farm 
  }
type Farm {
    id: String
    name: String
  }
`;
// Exports
export default TYPEDEFS;