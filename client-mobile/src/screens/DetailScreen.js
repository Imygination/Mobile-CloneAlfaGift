import {
  Dimensions,
  Image,
  ScrollView,
  TouchableHighlight,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utilitis/Styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DetailScreen() {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <ScrollView>
      <View style={{ width, height }}>
        <View
          style={[
            {
              backgroundColor: "lightgrey",
              flex: 1,
            },
          ]}
        >
          <View style={{ flex: 0.5, backgroundColor: "white" }}>
            <Image
              source={{
                uri: "https://c.alfagift.id/product/1/1_A13170001039_20231101095330548_small.jpg",
              }}
              style={{ flex: 1, resizeMode: "contain", margin: 50 }}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              backgroundColor: "white",
              marginTop: 10,
              padding:10
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="home-floor-a"
                size={30}
                color="red"
              />
              <Text
                variant="labelSmall"
                style={{ marginTop: 10, marginLeft: 5 }}
              >
                Stock dari Toko
              </Text>
            </View>
            <View style={{flex:1,}}>
              <Text variant="titleLarge">nabati Wafer Goguma 122 g</Text>
            </View>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white", marginTop: 10 }}>
            <Text>nabati Wafer Goguma 122 g</Text>
            <Text variant="titleMedium">Rp 8.900</Text>
          </View>
          <View style={{ flex: 0.2, backgroundColor: "white", marginTop: 10 }}>
            <Text>nabati Wafer Goguma 122 g</Text>
            <Text variant="titleMedium">Rp 8.900</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
