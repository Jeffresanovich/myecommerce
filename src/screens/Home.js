import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import ProductsList from "../components/ProductsList";
import CategoriesList from "../components/CategoriesList";

import { flex } from "../theme/stylesFunctions";

//Products data base
import { products } from "../data/dataBase";

const Home = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [productSearch, setProductSearch] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setImageVisible(false);
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

      if (searchByTitle === 0) setImageVisible(true);
      else setImageVisible(false);

      setProductSearch(searchByTitle);
    }
  }, [text]);

  return (
    <View style={styles.container}>
      <Header title='Home'></Header>
      <Search text={text} setText={setText} />
      <View style={styles.filterByCategoryContainer}>
        <Text style={styles.text}>Filter by: </Text>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>CATEGORIES</Text>
        </Pressable>
      </View>
      <ProductsList
        navigation={navigation}
        products={productSearch}
        imageVisible={imagVisible}
      />
      {!text ? <Text style={styles.bestOffers}>BEST OFFERS!!!</Text> : null}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <CategoriesList
          navigation={navigation}
          setModalVisible={setModalVisible}
        />
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
  filterByCategoryContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    ...flex("flex-start"),
  },
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: 100,
    backgroundColor: "blue",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  bestOffers: {
    margin: 10,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "BlackOpsOne",
    fontSize: 40,
    textShadowColor: "rgba(255, 0, 0, 0.75)",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 15,
  },
});
