import { StyleSheet, Text } from "react-native";

const DiscountPercentage = ({ discountPercentage }) => {
  return (
    <Text style={styles.discountPercentage}>
      {Math.round(discountPercentage)}% OFF
    </Text>
  );
};

export default DiscountPercentage;

const styles = StyleSheet.create({
  discountPercentage: {
    backgroundColor: "lightgreen",
    marginHorizontal: 10,
    borderRadius: 20,
    fontSize: 15,
    width: 75,
    textAlign: "center",
  },
});
