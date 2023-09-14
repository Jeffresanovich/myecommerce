import { SafeAreaView, StyleSheet, View } from "react-native";

import Home from "./src/screens/Home";
import Products from "./src/screens/Products";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    BlackOpsOne: require("./assets/fonts/Black_Ops_One/BlackOpsOne-Regular.ttf"),
  });

  if (!fontsLoaded) return;

  return (
    <SafeAreaView>
      {/*<Home></Home>*/}
      {<Products category='smartphones' />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
