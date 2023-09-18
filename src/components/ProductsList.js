import { StyleSheet, View, FlatList, Image } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ products, navigation }) => {
  return (
    <View>
      {products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={products.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
        />
      ) : (
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/product-not-found.png")}
        />
      )}
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 420,
    height: 400,
  },
});

/**ESTILIZAR EL COMPONENTE "SIN PRODUCTOS PARA MOSTRAR" */
