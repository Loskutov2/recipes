import PropTypes from 'prop-types';
import { Inf, ListItem, Img } from './Recipe.styled';
export function RecipeInfo({name, time, serving, calories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}){
    const difs=['Easy', 'Medium', 'Hard']
    return(
        <ListItem>
            <Img src={img} alt={name} width={300} height={300}/>
            <h2>{name}</h2>
            <Inf>
                <p><IconTime size="20px"/> {time} min</p>
                <p><IconPie size="20px"/>{serving} servings</p>
                <p><IconCalories size="20px"/> {calories} calories</p>
            </Inf>
            <Inf>
                <h2>{difs[difficulty]} dificulty</h2>
            </Inf>
        </ListItem>
    )
}
RecipeInfo.propTypes = {
	name: PropTypes.string,
	time: PropTypes.string,
	servings: PropTypes.number,
	calories: PropTypes.number,
	difficulty: PropTypes.number,
	image: PropTypes.string
}