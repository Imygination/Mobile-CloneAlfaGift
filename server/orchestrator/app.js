import 'dotenv/config'

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolversItem, typeDefsItem } from "./schema/itemSchema.js";
import { resolversUser, typeDefsUser} from "./schema/userSchema.js";

const server = new ApolloServer({
  typeDefs: [typeDefsItem, typeDefsUser],
  resolvers: [resolversItem, resolversUser],
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT) || 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
