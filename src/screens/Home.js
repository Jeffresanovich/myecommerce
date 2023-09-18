import { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Modal, Alert } from "react-native";

import Header from "../components/Header";
import Title from "../components/Title";
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
      <View style={styles.filterByCategoryContainer}>
        <Text style={styles.text}>Filter by: </Text>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>CATEGORIES</Text>
        </Pressable>
      </View>
      <ProductsList products={productSearch} navigation={navigation} />
      {!text ? (
        <Title otherStyle={styles.title} title={"BEST OFFERS!!!"} />
      ) : null}
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
  title: {
    margin: 10,
    color: "red",
    fontWeight: "bold",
    fontFamily: "BlackOpsOne",
  },
});
