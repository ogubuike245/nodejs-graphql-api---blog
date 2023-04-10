import { GraphQLObjectType } from "graphql";
import resolvers from "../resolvers/index.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getSingleBlogPost: resolvers.getSingleBlogPost,
    getAllBlogPosts: resolvers.getAllBlogPosts,
  },
});

export default RootQuery;
