import { StyleSheet, View } from "react-native";

import Category from "./Category";

const Home = () => {
  return (
    <View style={styles.container}>
      <Category />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: 400,
  },
});
