import { StyleSheet, Text } from "react-native";

const BeforePrice = ({ price, discountPercentage }) => {
  return (
    <Text style={styles.beforePrice}>
      ${Math.round((price * discountPercentage) / 100 + price)}
    </Text>
  );
};

export default BeforePrice;

const styles = StyleSheet.create({
  beforePrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
  },
});
