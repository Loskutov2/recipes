import { RecipeInfo } from "./RecipeInfo";
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
export function Recipe({recipe}){
    return(
        <ul>
            {recipe.map(({name, time, servings, calories, image, difficulty})=>{
                return <RecipeInfo
                key={name}
                name={name}
                time={time}
                serving={servings}
                calories={calories}
                difficulty={difficulty}
                img={image}
                iconTime={BsAlarm}
                iconCalories={HiOutlineChartBar}
                iconPie={HiOutlineChartPie}
                 />
            })}
        </ul>

    )
}
