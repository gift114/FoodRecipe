import React from "react";
import styles from "./Styling/NewRecipe.module.css";

export default function Details({ foodRecipe }) {
  return (
    <div>
      <div className={styles.detail}>
        <span className={styles.details}>
          Ready in: {foodRecipe.readyInMinutes} minutes
        </span>
        <span className={styles.details}>
          {foodRecipe.vegetarian ? "🫑 Vegeterian" : "🥩 Non-vegeterian"}
        </span>
      </div>
      <div className={styles.detail}>
        <span className={styles.details}>Servings: {foodRecipe.servings}</span>
        <span className={styles.details}>
          #{foodRecipe.pricePerServing * 10} per serving.
        </span>
      </div>
    </div>
  );
}
