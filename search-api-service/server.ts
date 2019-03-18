import { GraphQLServer } from "graphql-yoga";
import { typeDefs, resolvers } from "./schema";

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});
const port = 4000;
server.start({
    port, endpoint: "/search-api",
    playground: "/search-api",
}, () => console.log(`Server is running on port ${port}`));
