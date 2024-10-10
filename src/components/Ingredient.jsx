import React from "react";
import styles from "./Styling/NewRecipe.module.css";

export default function Ingredient({ foodRecipe, isLoading }) {
  return (
    <div>
      <h2 className={styles.heading}>Ingredients:</h2>
      {isLoading
        ? ""
        : foodRecipe.extendedIngredients.map((ingredient) => (
            <div className={styles.ingredients} key={ingredient.id}>
              <img
                className={styles.ingredientImage}
                src={
                  `https://spoonacular.com/cdn/ingredients_100*100/` +
                  ingredient.image
                }
                alt=""
              />
              <div className={styles.ingredient}>
                <h3>{ingredient.name}</h3>
                <div>{ingredient.original}</div>
              </div>
            </div>
          ))}
    </div>
  );
}
