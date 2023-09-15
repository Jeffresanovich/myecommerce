import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import CategoriesList from "../components/CategoriesList";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title='CATEGORIAS'></Header>
      <CategoriesList navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
});
