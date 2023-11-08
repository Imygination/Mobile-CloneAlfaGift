import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 6,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  middle: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 380,
    overflow: "hidden",
  },
  variant: {
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    width: 380,
    overflow: "hidden",
    marginBottom: 10,
  },
  circle: {
    backgroundColor: "lavender",
    height: 70,
    width: 70,
    borderRadius: 35,
    overflow: "hidden",
    margin: 10,
  },
  status: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: 100,
    width: 380,
    overflow: "hidden",
  },
});

export default styles;
