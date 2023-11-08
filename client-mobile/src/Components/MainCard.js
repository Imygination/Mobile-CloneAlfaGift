import { Dimensions, Image, TouchableHighlight, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utilitis/Styles";
import { useNavigation } from "@react-navigation/native";

export default function MainCard() {
  const navigation = useNavigation()
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ width: width * 0.3, height: height * 0.3 }}>
      <View
        style={[
          {
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            margin: 10,
            padding: 5,
            overflow: "hidden",
          },
          styles.shadow,
        ]}
      >
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="white"
          onPress={() => navigation.navigate("DetailScreen")}
          style={{ flex: 1 }}
        >
          <Image
            source={{
              uri: "https://c.alfagift.id/product/1/1_A13170001039_20231101095330548_small.jpg",
            }}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </TouchableHighlight>
        <View style={{ flex: 1 }}>
          <Text>nabati Wafer Goguma 122 g</Text>
          <Text variant="titleMedium">Rp 8.900</Text>
          <Button mode="contained" buttonColor="darkblue" >
            <Text style={{ color: "white", fontSize: 10 }}>+ Keranjang</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
