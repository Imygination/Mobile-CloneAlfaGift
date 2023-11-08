import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PromoScreen from "../screens/PromoScreen";
import AccountScreen from "../screens/AccountScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import MainCard from "../Components/MainCard";
import SpecialPager from "../Components/SpecialPager";
import DetailScreen from "../screens/DetailScreen";
import MainStack from "./MainStack";

const Tab = createBottomTabNavigator();

const optionTab = (label, iconName) => {
  return {
    tabBarLabel: label,
    tabBarLabelStyle: {
      fontSize: 15,
      paddingBottom: 5,
    },
    tabBarActiveTintColor: "grey",
    tabBarIcon: () => (
      <MaterialCommunityIcons name={iconName} size={24} color="grey" />
    ),
  };
};

export default function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LandingPage"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: "Beranda",
          tabBarLabelStyle: {
            fontSize: 15,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "grey",
          tabBarIcon: () => (
            <MaterialCommunityIcons name={"home"} size={24} color="grey" />
          ),
        }}
      />
      <Tab.Screen
        name="PromoScreen"
        options={optionTab("Promo", "brightness-percent")}
        component={PromoScreen}
      />
      <Tab.Screen
        name="AccountScreen"
        options={optionTab("Akun", "account")}
        component={AccountScreen}
      />
      <Tab.Screen
        name="SpecialPager"
        options={optionTab("Akun", "account")}
        component={SpecialPager}
      />
    </Tab.Navigator>
  );
}
