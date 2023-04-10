import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";

export const BlogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: { type: GraphQLString },
    snippet: { type: GraphQLString },
    content: { type: GraphQLString },
    featured: { type: GraphQLBoolean },
  }),
});
