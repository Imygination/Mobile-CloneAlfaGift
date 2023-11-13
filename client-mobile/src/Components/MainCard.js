import { Dimensions, Image, TouchableHighlight, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utilitis/Styles";
import { useNavigation } from "@react-navigation/native";

export default function MainCard({item}) {
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
          onPress={() => navigation.navigate("DetailScreen", {id: item.id})}
          style={{ flex: 1 }}
        >
          <Image
            source={{
              uri: item.imgUrl,
            }}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </TouchableHighlight>
        <View style={{ flex: 1, justifyContent:"flex-end" }}>
          <Text>{item.name}</Text>
          <Text variant="titleMedium">Rp 8.900</Text>
          <Button mode="contained" buttonColor="darkblue" >
            <Text style={{ color: "white", fontSize: 10 }}>+ Keranjang</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
