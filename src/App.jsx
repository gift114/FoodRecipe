import Search from "./components/Search"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import { useState } from "react"

export default function App( ){
  const [foodData, setFoodData] = useState([]) 
  const [foodId, setFoodId] = useState("658615")

  return (
    <>
       <NavBar/>
       <Search foodData={foodData}  setFoodData={setFoodData}/>
       <Main foodId={foodId} foodData={foodData} setFoodId={setFoodId}/>
    </>
  )
}
