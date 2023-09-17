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
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp",
          }}
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
