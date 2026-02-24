import './ButtonList.css'
type exerciseType = {
    id: number, 
    name: string
}

type ButtonListProps ={
    exercise: exerciseType
}

export const ButtonList = ({exercise}:ButtonListProps) =>{


    return(
        <button>{exercise.name}</button>
    )
}