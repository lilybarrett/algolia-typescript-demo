import gql from "graphql-tag";
import { productSchema, productQueryResolvers } from "./product";

export const typeDefs = gql`
    ${productSchema}
`;

export const resolvers = {
    Query: {
        ...productQueryResolvers,
    },
};
