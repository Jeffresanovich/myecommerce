import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";

import allProducts from "../data/products";

const Products = ({ route, navigation }) => {
  const { category } = route.params;

  const [text, setText] = useState(null);

  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    const productsByCategory = allProducts.filter(
      (search) => search.category.toLowerCase() === category.toLowerCase()
    );

    setProductSearch(productsByCategory);

    if (text) {
      const searchByTitle = productsByCategory.filter(
        (search) =>
          search.title.toLocaleLowerCase() === text.toLocaleLowerCase()
      );
      setProductSearch(searchByTitle);
    }
  }, [text, category]);

  return (
    <View>
      <Header title={category} />
      <Search text={text} setText={setText} />
      <ProductsList products={productSearch} navigation={navigation} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
});
