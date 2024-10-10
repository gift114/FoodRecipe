import React, { useEffect, useState } from 'react'
import styles from './Styling/Search.module.css'

const API_KEY = "808da2d24856402ab51f17e7927ba02d"
const URL = "https://api.spoonacular.com/recipes/complexSearch"

export default function Search ({foodData, setFoodData}){
    const [query, setQuery] = useState("Pizza");

    useEffect(() =>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setFoodData(data.results);
            console.log(foodData);
        }
        fetchFood()
    }, [query])

    return (
        <div>
            <input className={styles.inputField} value={query} onChange={(e) => {setQuery(e.target.value)}} type="text" />
        </div>
    )
}
