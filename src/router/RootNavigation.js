import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductDetail from "../screens/ProductDetail";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
