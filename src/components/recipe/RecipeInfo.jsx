import PropTypes from 'prop-types';
export function RecipeInfo({name, time, serving, calories, img, difficulty, iconTime: IconTime, iconCalories: IconCalories, iconPie: IconPie}){
    return(
        <li>
            <img src={img} alt={name} width={300} height={300}/>
            <h2>{name}</h2>
            <p><IconPie/>{serving} порцій</p>
            <p><IconCalories/> {calories} ккал</p>
            <p>Складність: {difficulty}</p>
            <p><IconTime/> {time} хв</p>
        </li>
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