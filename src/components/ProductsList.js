import { StyleSheet, View, FlatList, Image } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ navigation, products, imageVisible }) => {
  return (
    <View>
      {products.length == 0 || true ? (
        <Image
          style={styles.image}
          source={require("../../assets/product-not-found.png")} //EN PROCESO DE APLICACION
        />
      ) : (
        <FlatList
          data={products}
          keyExtractor={products.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  image: {
    marginVertical: 50,
    width: 420,
    height: 400,
  },
});

/**ESTILIZAR EL COMPONENTE "SIN PRODUCTOS PARA MOSTRAR" */
