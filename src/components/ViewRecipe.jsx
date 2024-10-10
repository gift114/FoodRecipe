import { useState, useEffect } from "react";
import styles from "./Styling/NewRecipe.module.css";
import Ingredient from "./Ingredient";
import Instructions from "./Instructions";
import Details from "./Details";

export default function ViewRecipe({ foodId }) {
  const [foodRecipe, setFoodRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const recipe_API = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "808da2d24856402ab51f17e7927ba02d";
  useEffect(() => {
    async function fetchFoodRecipe() {
      const res = await fetch(`${recipe_API}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodRecipe(data);
      setIsLoading(false);
      console.log(foodRecipe);
    }
    fetchFoodRecipe();
  }, [foodId]);

  return (
    <div className={styles.view}>
      <h1 className={styles.title}>{foodRecipe.title}</h1>
      <img
        className={styles.image}
        src={foodRecipe.image}
        alt={foodRecipe.title}
      />
      <Details foodRecipe={foodRecipe} />
      <Ingredient foodRecipe={foodRecipe} isLoading={isLoading} />
      <Instructions foodRecipe={foodRecipe} isLoading={isLoading} />
    </div>
  );
}
