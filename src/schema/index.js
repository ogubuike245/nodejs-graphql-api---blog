import { GraphQLSchema } from "graphql";
import Mutations from "../mutations/index.js";
import RootQuery from "../queries/index.js";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
