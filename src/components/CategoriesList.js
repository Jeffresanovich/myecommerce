import { StyleSheet, View, FlatList } from "react-native";

import { categories } from "../data/dataBase";
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ navigation, setModalVisible }) => {
  return (
    <View style={styles.modalView}>
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

const styles = StyleSheet.create({
  modalView: {
    margin: 80,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    shadowColor: "black",
    elevation: 50,
  },
});
