import React from "react";
import { StyleSheet, View } from "react-native";

import { products } from "../data/dataBase";
import ProductsList from "./ProductsList";

const BestOffersList = ({ navigation }) => {
  const offersProducts = products.filter(
    (product) => product.discountPercentage > 20
  );

  return (
    <View>
      <ProductsList products={offersProducts} navigation={navigation} />
    </View>
  );
};

export default BestOffersList;

const styles = StyleSheet.create({});
