import { Recipe } from "./recipe/Recipe";
import recipeData from "./../recipeData.json"

export function App(){
    return(
        <>
            <Recipe recipe={recipeData}/>
        </>
    )
}