import { gql } from 'graphql-tag';

 const typeDefs = gql`
 type AppBarColorSetting {
   id: Int!
   name: String!
   setting: String!
 }
 type Query {
   appBarColorSetting: AppBarColorSetting!
 }
 type Mutation {
   updateAppBarColorSetting(setting: String!): AppBarColorSetting!
 }
`;   

export default typeDefs;