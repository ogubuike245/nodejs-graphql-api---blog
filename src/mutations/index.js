import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";
import { Blog } from "../models/blog.model.js";
import { BlogType } from "../types/index.js";

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createBlogPost: {
      type: BlogType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        snippet: { type: GraphQLString },
        content: { type: GraphQLString },
        featured: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        const { id, title, content, category, snippet } = args;
        const post = Blog.create({
          id,
          title,
          category,
          snippet,
          content,
        });

        return post;
      },
    },

    updateBlogPost: {
      type: BlogType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        category: { type: GraphQLString },
        snippet: { type: GraphQLString },
        content: { type: GraphQLString },
        featured: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        const { id, title, content, category, snippet, featured } = args;
        const post = Blog.findByIdAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              content,
              category,
              snippet,
              featured,
            },
          },
          { new: true }
        );

        return post;
      },
    },

    deleteBlogPost: {
      type: BlogType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        const { id } = args;
        const post = Blog.findByIdAndDelete(id);

        return post;
      },
    },
  },
});

export default Mutations;
