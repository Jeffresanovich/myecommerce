import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../theme/color";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Image
        style={styles.image}
        height={80}
        width={80}
        source={{ uri: item.thumbnail }}
        resizeMode='cover'
      />
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.mediumBlue,
    borderRadius: 10,
    borderWidth: 2,
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
  },
  image: {
    marginRight: 10,
  },
});
