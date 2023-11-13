import { ApolloClient, InMemoryCache } from "@apollo/client";

export default client = new ApolloClient({
  uri: "https://aac1-114-122-100-10.ngrok-free.app/",
  cache: new InMemoryCache(),
});
