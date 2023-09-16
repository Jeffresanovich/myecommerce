import { StyleSheet, Text } from "react-native";

import colors from "../theme/color";

const Description = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};

export default Description;

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    backgroundColor: colors.white,
    padding: 20,
    textAlign: "center",
    fontWeight: "300",
  },
});
