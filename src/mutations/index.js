import { GraphQLObjectType } from "graphql";
import resolvers from "../resolvers/index.js";

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createBlogPost: resolvers.createBlogPost,
    updateBlogPost: resolvers.updateBlogPost,
    deleteBlogPost: resolvers.deleteBlogPost,
  },
});

export default Mutations;
