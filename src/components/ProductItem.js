import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex, border } from "../theme/stylesFunctions";

const ProductItem = ({ item, navigation }) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <Image
          style={styles.image}
          height={80}
          width={80}
          source={{ uri: item.thumbnail }}
          resizeMode='cover'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceDiscountContainer}>
            <Text style={styles.price}>$ {item.price}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.beforePrice}>
                $
                {Math.round(
                  (item.price * item.discountPercentage) / 100 + item.price
                )}
              </Text>
              <Text style={styles.discountPercentage}>
                {Math.round(item.discountPercentage)}% OFF
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  button: {
    ...flex("flex-start"),
  },
  image: {
    margin: 20,
  },
  infoContainer: {
    width: "70%",
  },
  title: {
    fontSize: 22,
    flexWrap: "wrap",
    fontWeight: "300",
  },
  priceDiscountContainer: {
    ...flex("flex-start"),
  },
  priceContainer: {
    alignItems: "center",
    marginEnd: 10,
  },
  beforePrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 35,
    fontWeight: "900",
    marginHorizontal: 10,
  },
  discountPercentage: {
    backgroundColor: "lightgreen",
    marginHorizontal: 10,
    borderRadius: 20,
    fontSize: 15,
    width: 70,
    textAlign: "center",
  },
});
