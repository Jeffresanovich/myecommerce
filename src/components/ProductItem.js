import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex } from "../theme/stylesFunctions";

import Price from "./Price";
import DiscountPercentage from "./DiscountPercentage";
import BeforePrice from "./BeforePrice";

const ProductItem = ({ item, navigation }) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <Image
          style={styles.image}
          height={100}
          width={100}
          source={{ uri: item.thumbnail }}
          resizeMode='cover'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceDiscountContainer}>
            <Price price={item.price} />
            <View style={styles.priceContainer}>
              <BeforePrice
                price={item.price}
                discountPercentage={item.discountPercentage}
              />
              <DiscountPercentage
                discountPercentage={item.discountPercentage}
              />
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
    fontSize: 23,
    flexWrap: "wrap",
    fontWeight: "300",
    width: "80%",
  },
  priceDiscountContainer: {
    ...flex("flex-start"),
  },
  priceContainer: {
    alignItems: "center",
    marginEnd: 10,
  },
});
