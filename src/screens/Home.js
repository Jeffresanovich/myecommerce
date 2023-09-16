import { StyleSheet, View, Text } from "react-native";

import Header from "../components/Header";
import BestOffersList from "../components/BestOffersList";
import CategoriesList from "../components/CategoriesList";
import Title from "../components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title='Home'></Header>
      <Title title={"Mejores ofertas"} />
      <BestOffersList navigation={navigation} />
      {/*<CategoriesList navigation={navigation} />*/}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
});
