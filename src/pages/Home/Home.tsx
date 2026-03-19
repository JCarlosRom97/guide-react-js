
import { exercisesReactHooks, exercisesReactWeb, exercisesJSCore } from '../../data/exercises';
import { ExerciseList } from '../../components/ExercisesList';
export const Home = () => {

  return (
    <>
      <h2>React Core</h2>
      <ExerciseList list={exercisesReactHooks} />
      <h2>React Web</h2>
      <ExerciseList list={exercisesReactWeb} />
       <h2>JS Core</h2>
      <ExerciseList list={exercisesJSCore} />
    </>

  );
}
