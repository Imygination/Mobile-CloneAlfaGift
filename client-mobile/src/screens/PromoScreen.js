import { View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function PromoScreen() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "white"]}
        // locations={[0.5, 0.8]}
        // end={{ x: 0.1, y: 0.2 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
    </View>
  );
}
