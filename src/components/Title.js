import { StyleSheet, Text } from "react-native";

const Title = ({ otherStyle, title }) => {
  return <Text style={[styles.title, otherStyle]}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
});
