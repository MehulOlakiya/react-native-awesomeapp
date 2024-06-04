import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/Favorites-context";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";

function FavoritesScreen() {
  const favoriteMealsClx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsClx.ids.includes(meal.id)
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});