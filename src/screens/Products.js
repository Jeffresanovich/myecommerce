import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";

import products from "../data/products";

const Products = ({ category = "productos" }) => {
  const [text, setText] = useState(null);

  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    if (category === "productos") setProductSearch(products);
    else {
      const searchByCategory = products.filter(
        (search) => search.category.toLowerCase() === category.toLowerCase()
      );
      setProductSearch(searchByCategory);
    }

    if (text) {
      const searchByTitle = products.filter(
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
      <ProductsList products={productSearch} />
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
