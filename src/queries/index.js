import { GraphQLObjectType } from "graphql";
import resolvers from "../resolvers/index.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: resolvers.getSingleBlogPost,
    posts: resolvers.getAllBlogPosts,
  },
});

export default RootQuery;
