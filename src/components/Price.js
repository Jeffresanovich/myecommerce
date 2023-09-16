import { StyleSheet, Text } from "react-native";

const Price = ({ price }) => {
  return <Text style={styles.price}>$ {price}</Text>;
};

export default Price;

const styles = StyleSheet.create({
  price: {
    fontSize: 40,
    fontWeight: "900",
    marginHorizontal: 10,
  },
});
