import { Blog } from "../models/blog.model.js";
import { BlogType } from "../types/index.js";
import {
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";

/* 
  getSingleBlogPost - Retrieves a single blog post from the database based on the 

*/
const getSingleBlogPost = {
  type: BlogType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Blog.findById(args.id);
  },
};

/* 
  getAllBlogPosts - Retrieves all blog posts from the database.

*/
const getAllBlogPosts = {
  type: new GraphQLList(BlogType),
  resolve(parent, args) {
    return Blog.find({});
  },
};

/*
 createBlogPost - Creates a new blog post in the database.

*/
const createBlogPost = {
  type: BlogType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    category: { type: new GraphQLNonNull(GraphQLString) },
    snippet: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    featured: {
      type: new GraphQLNonNull(GraphQLBoolean),
      defaultValue: false,
    },
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
};

/*
 updateBlogPost - Updates an existing blog post in the database.

*/
const updateBlogPost = {
  type: BlogType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
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

    console.log(post);
    return post;
  },
};

/*
 deleteBlogPost - Deletes a blog post from the database.

*/
const deleteBlogPost = {
  type: BlogType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    const { id } = args;
    const post = Blog.findByIdAndDelete(id);

    return post;
  },
};

export default {
  getSingleBlogPost,
  getAllBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
