import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text, Button, Searchbar, Card, Avatar } from "react-native-paper";
import MyComponent from "../Components/MainHeader";
import MainCard from "../Components/MainCard";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../utilitis/Styles";
import MainPager from "../Components/MainPager";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function HomeScreen({ navigation }) {
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
              <Text>Point</Text>
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
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
