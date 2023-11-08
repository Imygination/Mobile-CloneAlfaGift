import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";
import { MaterialIcons } from "@expo/vector-icons";

const SpecialPager = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <MaterialIcons
        name="arrow-back-ios"
        size={24}
        color="white"
        style={{ marginTop: "8%" }}
      />
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              overflow:"hidden"
            }}
          >
            <Image
              source={{
                uri: "https://cdn.alfagift.id/media/bo/product/ama/category/pm_category_190116_Qqxu.png",
              }}
              style={{ flex: 1, resizeMode: "cover"}}
            />
          </View>
        </View>
        <View style={styles.page} key="2">
          <View style={{ height: "90%", width: "100%" }}>
            <Image
              source={{
                uri: "https://alfagift.id/_ipx/q_70/https://cdn.takdes.net/media/bo/product/ama/banner/pm_banner_231108_bUK1.jpg",
              }}
              style={{ flex: 1, resizeMode: "stretch" }}
            />
          </View>
        </View>
        <View style={styles.page} key="3">
          <View style={{ height: "90%", width: "100%" }}>
            <Image
              source={{
                uri: "https://alfagift.id/_ipx/q_70/https://cdn.takdes.net/media/bo/product/ama/banner/pm_banner_231108_SNCg.png",
              }}
              style={{ flex: 1, resizeMode: "stretch" }}
            />
          </View>
        </View>
      </PagerView>
      <MaterialIcons
        name="arrow-forward-ios"
        size={24}
        color="white"
        style={{ marginTop: "8%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SpecialPager;
