import {
  ActivityIndicator,
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
import { useQuery, gql } from "@apollo/client";
const GET_ITEM_DETAIL = gql`
  query ExampleQuery($ItemId: ID) {
    findItem(id: $ItemId) {
      id
      name
      description
      price
      imgUrl
      authorId
      categoryId
      createdAt
      updatedAt
      Category {
        id
        name
        createdAt
        updatedAt
      }
      Ingredients {
        id
        name
        itemId
        createdAt
        updatedAt
      }
      User {
        address
      }
    }
  }
`;

export default function DetailScreen({ route }) {
  const { loading, error, data } = useQuery(GET_ITEM_DETAIL, {
    variables: { ItemId: route.params.id },
  });
  // console.log(route.params.id);
  console.log(loading, error, data);
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
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
                  uri: data.findItem.imgUrl,
                }}
                style={{ flex: 1, resizeMode: "contain", margin: 50 }}
              />
            </View>
            <View
              style={{
                flex: 0.1,
                backgroundColor: "white",
                marginTop: 10,
                padding: 10,
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
              <View style={{ flex: 1 }}>
                <Text variant="titleMedium">{data.findItem.name}</Text>
                <Text
                  variant="titleLarge"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  RP. {data.findItem.price}
                </Text>
              </View>
            </View>
            <View
              style={{ flex: 0.1, backgroundColor: "white", marginTop: 10 }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://cdn4.iconfinder.com/data/icons/delivery-5/512/delivery-04-512.png",
                  }}
                  style={{
                    flex: 1,
                    resizeMode: "contain",
                  }}
                />
                <View style={{ flex: 1, flexDirection: "column"}}>
                  <Text variant="labelLarge" style={{ flex: 1, paddingTop: 20 }}>
                    Address
                  </Text>
                  <Text variant="labelSmall" style={{ flex: 1, paddingBottom: 20 }}>
                    {data.findItem.User.address}
                  </Text>
                </View>
              </View>

              {/* <Text>nabati Wafer Goguma 122 g</Text>
              <Text variant="titleMedium">Rp 8.900</Text> */}
            </View>
            <View
              style={{ flex: 0.3, backgroundColor: "white", marginTop: 10 }}
            >
              <View style={{ flex: 1 }}>
                <Text variant="bodyLarge">Description</Text>
                <Text variant="bodySmall">{data.findItem.description}</Text>
                <Text variant="bodyLarge">Category</Text>
                <Text variant="bodySmall">{data.findItem.Category.name}</Text>
                <Text variant="bodyLarge">Ingredients</Text>
                <Text variant="bodySmall">{data.findItem.Ingredients.map(ing => `${ing.name},`)}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
