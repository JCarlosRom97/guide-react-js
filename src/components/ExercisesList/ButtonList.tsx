import './ButtonList.css'
import { useNavigate } from 'react-router-dom'
type exerciseType = {
    id: number,
    name: string,
    url: string
}

type ButtonListProps = {
    exercise: exerciseType
}

export const ButtonList = ({ exercise }: ButtonListProps) => {

    const navigate = useNavigate();
    const redirectToPage = (route: string) => navigate(route);

    return (
        <button className='Item buttonExercise item--large' onClick={() => redirectToPage(exercise.url)}>{exercise.name}</button>
    )
}