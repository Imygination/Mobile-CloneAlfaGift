import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./src/Navigators/MainTab";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient.js";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
