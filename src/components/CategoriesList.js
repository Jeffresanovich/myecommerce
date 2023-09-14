import { View, FlatList } from "react-native";

import categories from "../data/categories";
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={({ item }) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default CategoriesList;
