import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Hai, User",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: "Hai, User",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
