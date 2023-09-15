import { SafeAreaView, StyleSheet, View } from "react-native";

import Home from "./src/screens/Home";
import Products from "./src/screens/Products";
import ProductDetail from "./src/screens/ProductDetail";

import { useFonts } from "expo-font";

import products from "./src/data/products";

export default function App() {
  /**
   * Permite usar fuentes personalizadas
   */
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    BlackOpsOne: require("./assets/fonts/Black_Ops_One/BlackOpsOne-Regular.ttf"),
  });

  /**
   * No renderiza el componente hasta que se hayan cargados las letras
   */
  if (!fontsLoaded) return;

  return (
    <SafeAreaView>
      {/*<Home></Home>*/}
      {/*<Products category='smartphones' />*/}
      {<ProductDetail product={products[9]} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
