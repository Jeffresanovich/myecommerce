import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";

import allProducts from "../data/products";

const Products = ({ category }) => {
  const [text, setText] = useState(null);

  const [productLoad, setProductLoad] = useState([]);
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    /**
     * Esto permite inicializar la app con una cantidad determinada de productos,
     * es decir, dependiendo de la categoria, guardará todos los productos o solo
     * los de dicha categoria.
     */
    if (category === "productos") setProductLoad(allProducts);
    else {
      const productsByCategory = allProducts.filter(
        (search) => search.category.toLowerCase() === category.toLowerCase()
      );
      setProductLoad(productsByCategory);
    }

    /**
     * Este condicional permite busqueda entre productos previamente filtrados,
     * pudiendo ser todos los productos o solo los que correspoda a una categoria
     * determinada.
     */
    if (text) {
      const searchByTitle = productLoad.filter(
        (search) =>
          search.title.toLocaleLowerCase() === text.toLocaleLowerCase()
      );
      setProductSearch(searchByTitle);
    } else setProductSearch(productLoad);
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
