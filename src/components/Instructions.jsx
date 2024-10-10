import React from "react";
import styles from "./Styling/NewRecipe.module.css";

export default function Instructions({ foodRecipe, isLoading }) {
  return (
    <div>
      <h2 className={styles.heading}>Instructions:</h2>
      {isLoading ? (
        ""
      ) : (
        <ol className={styles.instructions}>
          {foodRecipe.analyzedInstructions[0].steps.map((step) => (
            <li className={styles.instruction} key={step.id}>
              {step.step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
