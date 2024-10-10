import styles from "./Styling/FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <div className={styles.foodDescription}>
        <h4 className={styles.h4}>{food.title}</h4>
        <button
          className={styles.btn}
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
