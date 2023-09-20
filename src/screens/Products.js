import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

//Components
import Header from "../components/Header";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";

//Products data base
import allProducts from "../data/products";

const Products = ({ route, navigation }) => {
  const { category } = route.params;

  const [text, setText] = useState(null);
  const [productSearch, setProductSearch] = useState([]);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setImageVisible(false);

    //Muestra solo los productos que coincidan con la cetegoria seleccionada
    const productsByCategory = allProducts.filter(
      (search) => search.category.toLowerCase() === category.toLowerCase()
    );

    setProductSearch(productsByCategory);

    if (text) {
      const searchByTitle = productsByCategory.filter(
        (search) =>
          search.title.toLocaleLowerCase() === text.toLocaleLowerCase()
      );

      //Permite mostrar una imagen cuando la busqueda no trae ningun producto
      if (searchByTitle.length === 0) setImageVisible(true);

      setProductSearch(searchByTitle);
    }
  }, [text, category]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <Search text={text} setText={setText} />
      <ProductsList
        navigation={navigation}
        products={productSearch}
        imageVisible={imageVisible}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    marginBottom: 350,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
});
