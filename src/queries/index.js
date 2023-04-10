import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import { Blog } from "../models/blog.model.js";
import { BlogType } from "../types/index.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getSingleBlogPost: {
      type: BlogType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Blog.findById(args.id);
      },
    },
    getAllBlogPosts: {
      type: new GraphQLList(BlogType),
      resolve(parent, args) {
        return Blog.find({});
      },
    },
  },
});

export default RootQuery;
