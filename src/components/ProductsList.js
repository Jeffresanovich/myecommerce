import { StyleSheet, View, FlatList, Image } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ navigation, products, imageVisible }) => {
  console.log("productos " + products.length);
  console.log("visible " + imageVisible);

  return (
    <View>
      {imageVisible ? (
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
