import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import CategoriesList from "../components/CategoriesList";

const Category = () => {
  return (
    <View>
      <Header title='CATEGORIAS'></Header>
      <CategoriesList />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
