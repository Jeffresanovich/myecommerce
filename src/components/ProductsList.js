import { View, FlatList, Text } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ products, navigation }) => {
  return (
    <View>
      {products.lenght < 0 ? (
        <FlatList
          data={products}
          keyExtractor={products.id}
          renderItem={({ item }) => (
            <ProductItem item={item} navigation={navigation} />
          )}
        />
      ) : (
        <Text>Sin productos para mostar</Text>
      )}
    </View>
  );
};

export default ProductsList;

/**ESTILIZAR EL COMPONENTE "SIN PRODUCTOS PARA MOSTRAR" */
