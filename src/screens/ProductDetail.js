import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

//Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//Components
import Header from "../components/Header";
import Price from "../components/Price";
import DiscountPercentage from "../components/DiscountPercentage";
import BeforePrice from "../components/BeforePrice";
import Description from "../components/Description";

//Styles
import { flex } from "../theme/stylesFunctions";
import Title from "../components/Title";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Header title={product.category} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.images[0],
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleRatingStockContainer}>
            <Title title={product.title} />
            <View style={styles.ratingStockContainer}>
              <View style={styles.ratingContainer}>
                <AntDesign name='star' size={24} color='yellow' />
                <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
              </View>
              <Text style={styles.stock}>{product.stock} available</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <BeforePrice
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
            <Price price={product.price} />
            <DiscountPercentage
              discountPercentage={product.discountPercentage}
            />
          </View>
        </View>
        <Description description={product.description} />
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.buyButton]}>
            <MaterialIcons name='payment' size={50} color='white' />
            <Text style={styles.buttonText}>Buy</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.cartButton]}>
            <Text style={styles.buttonText}>Cart</Text>
            <FontAwesome5 name='shopping-cart' size={40} color='white' />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

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
  infoContainer: {
    ...flex("space-evenly"),
    marginVertical: 15,
  },
  titleRatingStockContainer: {
    width: 300,
  },
  ratingStockContainer: {
    ...flex("space-evenly"),
    fontSize: 10,
    marginTop: 10,
  },
  ratingContainer: {
    ...flex("space-evenly"),
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
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
    margin: 10,
    width: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
  buyButton: {
    ...flex("space-evenly"),
    backgroundColor: "blue",
  },
  cartButton: {
    ...flex("space-evenly"),
    backgroundColor: "green",
  },
});
