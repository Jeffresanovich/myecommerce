import { StyleSheet, Text, View } from "react-native";

import color from "../theme/color";

const CategoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.text}> {item} </Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    margin: 7,
    fontSize: 30,
    color: color.heavyBlue,
    borderColor: color.mediumBlue,
    borderRadius: 50,
    borderWidth: 2,
    textAlign: "center",
  },
});
