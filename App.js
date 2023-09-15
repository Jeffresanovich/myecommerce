import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./src/router/RootNavigation";

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
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
