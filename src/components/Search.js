import { StyleSheet, TextInput, View, Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import colors from "../theme/color";

const Search = ({ text, setText }) => {
  /**
   * Limpia el TextImput
   */
  const clearText = () => {
    setText(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Ingrese un producto'
      />
      {text ? (
        <Pressable onPress={clearText}>
          <MaterialIcons name='cleaning-services' size={30} color='black' />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  input: {
    width: "90%",
    height: 50,
    margin: 12,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.mediumBlue,
    padding: 10,
  },
});
