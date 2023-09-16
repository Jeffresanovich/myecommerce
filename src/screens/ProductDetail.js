import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Header from "../components/Header";

import colors from "../theme/color";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Header title={product.category} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: product.images[0],
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.upTitle}>
            <View style={styles.ratingContainer}>
              <AntDesign name='star' size={24} color='yellow' />
              <Text style={styles.rating}>{product.rating.toFixed()}</Text>
            </View>
            <Text style={styles.stock}>
              {product.stock} {product.stock > 1 ? "disponibles" : "disponible"}
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.beforePrice}>
            $
            {Math.round(
              (product.price * product.discountPercentage) / 100 + product.price
            )}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.discountPercentage}>
            {Math.round(product.discountPercentage)}%
          </Text>
        </View>
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.buyButton]}>
          <MaterialIcons name='payment' size={50} color='white' />
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.cartButton]}>
          <Text style={styles.buttonText}>Carrito</Text>
          <FontAwesome5 name='shopping-cart' size={40} color='white' />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetail;
/**
 * Permite centrar: se usa con el operador spread (...)
 */
const centrar = {
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: 10,
  },
  titleContainer: {
    ...centrar,
    marginVertical: 15,
  },
  title: {
    textAlign: "center",
    width: 300,
    fontSize: 30,
    flexWrap: "wrap",
  },
  upTitle: {
    ...centrar,
    fontSize: 10,
    marginTop: 10,
  },
  ratingContainer: {
    ...centrar,
  },
  rating: {
    textAlign: "center",
    color: "grey",
  },
  stock: {
    color: "grey",
  },
  priceContainer: {
    alignItems: "center",
    marginEnd: 10,
  },
  beforePrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 40,
    fontWeight: "900",
  },
  discountPercentage: {
    backgroundColor: "lightgreen",
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 15,
  },
  description: {
    fontSize: 20,
    backgroundColor: colors.white,
    padding: 20,
    //marginHorizontal: 15,
    //borderRadius: 30,
    textAlign: "center",
    fontWeight: "300",
  },
  buttonContainer: {
    //...centrar,
    marginVertical: 10,
    color: "white",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
  buyButton: {
    ...centrar,
    backgroundColor: "blue",
  },
  cartButton: {
    ...centrar,
    backgroundColor: "green",
  },
});
