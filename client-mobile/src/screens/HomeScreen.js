import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text, Button, Searchbar, Card, Avatar } from "react-native-paper";
import MyComponent from "../Components/MainHeader";
import MainCard from "../Components/MainCard";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../utilitis/Styles";
import MainPager from "../Components/MainPager";
import { useQuery, gql } from "@apollo/client";
const GET_ITEMS = gql`
  query ExampleQuery {
    showItems {
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
        updatedAt
        name
        id
        createdAt
      }
      Ingredients {
        updatedAt
        name
        itemId
        id
        createdAt
      }
    }
  }
`;

export default function HomeScreen({ navigation }) {
  const { loading, error, data } = useQuery(GET_ITEMS);
  // console.log(loading, error, data);
  return (
    <ScrollView style={[styles.container]}>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "white"]}
          // locations={[0.5, 0.8]}
          end={{ x: 0.5, y: 0.3 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
        <View style={[styles.content]}>
          <Text style={{ color: "white" }}>
            Kirim ke:{" "}
            <Text style={{ color: "white", fontWeight: "bold" }}>Rumah</Text>
          </Text>
          <Searchbar placeholder="Mau belanja apa?" style={{ marginTop: 10 }} />
          <View style={[styles.status, styles.shadow]}>
            <View>
            </View>
          </View>
          <View style={[styles.middle]}>
            <MainPager />
          </View>
          <View style={[styles.variant, { flexDirection: "row" }]}>
            <View style={[styles.circle, styles.shadow]}>
              <Image
                source={{
                  uri: "https://cdn.alfagift.id/media/bo/product/ama/category/pm_category_190116_Qqxu.png",
                }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>
            <View style={[styles.circle, styles.shadow]}>
              <Image
                source={{
                  uri: "https://cdn.alfagift.id/media/bo/product/ama/category/pm_category_190123_QnSJ.png",
                }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>
            <View style={[styles.circle, styles.shadow]}>
              <Image
                source={{
                  uri: "https://cdn.alfagift.id/media/bo/product/ama/category/pm_category_210223_2K7i.png",
                }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>
            <View style={[styles.circle, styles.shadow]}>
              <Image
                source={{
                  uri: "https://cdn.alfagift.id/media/bo/product/ama/category/pm_category_210223_1NDX.png",
                }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="titleMedium">Penawaran Terbaik</Text>
            <Text variant="titleMedium" style={{ color: "red" }}>
              Lihat Semua
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
              marginTop: 10,
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              data.showItems.map((item) => {
                return <MainCard item={item} key={item.id} />;
              })
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
