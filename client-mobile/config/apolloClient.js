import { ApolloClient, InMemoryCache } from "@apollo/client";

export default client = new ApolloClient({
  uri: "https://alfakw2.gemaramadhan.online/",
  cache: new InMemoryCache(),
});
