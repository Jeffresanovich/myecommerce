import { StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    width: 300,
    fontWeight: "300",
    fontSize: 30,
    flexWrap: "wrap",
  },
});
