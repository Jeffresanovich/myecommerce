import { StyleSheet, Text, View, Pressable } from "react-native";

import color from "../theme/color";

const CategoryItem = ({ item, navigation }) => {
  return (
    <View style={styles.categoriesContainer}>
      <Pressable
        onPress={() => navigation.navigate("Products", { category: item })}
      >
        <Text style={styles.text}> {item.toUpperCase()} </Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoriesContainer: {},
  text: {
    margin: 10,
    paddingVertical: 10,
    fontSize: 30,
    color: color.heavyBlue,
    borderColor: color.mediumBlue,
    borderRadius: 10,
    borderWidth: 2,
    textAlign: "center",
  },
});
