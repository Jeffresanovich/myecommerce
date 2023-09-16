import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import BestOffersList from "../components/BestOffersList";
import CategoriesList from "../components/CategoriesList";
import Title from "../components/Title";
import Search from "../components/Search";

//Products data base
import { products } from "../data/dataBase";
import ProductsList from "../components/ProductsList";

const Home = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    const offersProducts = products.filter(
      (product) => product.discountPercentage > 20
    );
    setProductSearch(offersProducts);
    if (text) {
      const searchByTitle = products.filter(
        (search) =>
          search.title.toLocaleLowerCase() === text.toLocaleLowerCase()
      );
      setProductSearch(searchByTitle);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <Header title='Home'></Header>
      <Search text={text} setText={setText} />
      {!text ? <Title title={"Mejores ofertas"} /> : null}
      <ProductsList products={productSearch} navigation={navigation} />
    </View>
  );
};
/**
 * PONER LA BUSQUEDA SIN RESU;TADO EN LA LIST DE PRODUCTOS
 */
export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
});
