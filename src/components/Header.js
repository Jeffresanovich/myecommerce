import { StyleSheet, Text, View } from "react-native";

import color from "../theme/color";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {title.toUpperCase()} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.mediumBlue,
    height: 100,
    paddingTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "BlackOpsOne",
    color: color.white,
  },
});
