import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

import Header from "../components/Header";
import Title from "../components/Title";
import Search from "../components/Search";

//Products data base
import { products } from "../data/dataBase";
import ProductsList from "../components/ProductsList";
import ModalCategories from "../components/ModalCategories";

const Home = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [productSearch, setProductSearch] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    //Filtra los productos con descuentos mayores a 20%
    const offersProducts = products.filter(
      (product) => product.discountPercentage > 20
    );
    setProductSearch(offersProducts);

    //Busca en todos los productos
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Filtrar por categoria</Text>
      </Pressable>
      <ModalCategories
        modalVisible={modalVisible}
        setModalVisible={setModalVisible()}
        navigation={navigation}
      />
      {!text ? <Title title={"Mejores ofertas"} /> : null}
      <ProductsList products={productSearch} navigation={navigation} />
    </View>
  );
};
/**
 * PONER LA BUSQUEDA SIN RESULTADO EN LA LISTA DE PRODUCTOS
 */
export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
