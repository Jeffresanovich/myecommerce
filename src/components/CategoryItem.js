import { StyleSheet, Text, View, Pressable } from "react-native";

import color from "../theme/color";

const CategoryItem = ({ item, navigation, setModalVisible }) => {
  const handlePress = () => {
    navigation.navigate("Products", { category: item });
    setModalVisible(false);
  };

  return (
    <View style={styles.categoriesContainer}>
      <Pressable onPress={handlePress}>
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
    fontSize: 20,
    color: color.heavyBlue,
    borderColor: color.mediumBlue,
    borderRadius: 20,
    borderWidth: 2,
    textAlign: "center",
  },
});
