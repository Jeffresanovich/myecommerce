import { StyleSheet, Text, View } from "react-native";
import React from "react";

import products from "../data/products";

const ProductDetail = ({ product }) => {
  return (
    <View>
      <Text>{product}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
