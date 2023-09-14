import { View, FlatList } from "react-native";

import ProductItem from "./ProductItem";

const ProductsList = ({ products }) => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default ProductsList;
