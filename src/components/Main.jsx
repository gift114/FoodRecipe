import React from "react";
import FoodList from "./FoodList";
import ViewRecipe from "./ViewRecipe";
import styles from "./Styling/Main.module.css";

export default function Main({ foodData, foodId, setFoodId }) {
  return (
    <div className={styles.main}>
      <FoodList foodData={foodData} setFoodId={setFoodId} />
      <ViewRecipe foodId={foodId} />
    </div>
  );
}
