import './ExerciseList.css'
import { ButtonList } from "./ButtonList";

type ExercisesType = {
    id: number,
    name: string,
    url: string
}

type ExerciseListProps = {
    list: ExercisesType[];
};

export const ExerciseList = ({ list }: ExerciseListProps) => {
    return (
        <div className="horizontalContainer marginContainer">
            {list.map(((exercise:ExercisesType) =>(
                <ButtonList key={exercise.id} exercise={exercise} />
            )))}
        </div>
    )
}