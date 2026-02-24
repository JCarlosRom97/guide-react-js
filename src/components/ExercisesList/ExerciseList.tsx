import './ExerciseList.css'
import { ButtonList } from "./ButtonList";

type ExercisesType = {
    id: number,
    name: string
}

type ExerciseListProps = {
    list: ExercisesType[];
};

export const ExerciseList = ({ list }: ExerciseListProps) => {
    return (
        <div className="exercisesContainer">
            {list.map(((exercise:ExercisesType) =>(
                <ButtonList exercise={exercise} />
            )))}
        </div>
    )
}