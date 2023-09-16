import { View, FlatList } from "react-native";

import categories from "../data/categories";
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ navigation, setModalVisible }) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;
