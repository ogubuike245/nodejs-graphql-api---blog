import { GraphQLObjectType } from "graphql";
import resolvers from "../resolvers/index.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    Post: resolvers.getSingleBlogPost,
    Posts: resolvers.getAllBlogPosts,
  },
});

export default RootQuery;
