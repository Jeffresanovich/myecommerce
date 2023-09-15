import { View, FlatList } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ products, navigation }) => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ProductsList;
