import { exercisesReactWeb } from '../../data/exercisesReactWeb';
import { exercisesReactHooks } from '../../data/exercisesReactHooks';
import { ExerciseList } from '../../components/ExercisesList';
export const Home = () => {

  return (
    <>
      <h2>React Core</h2>
      <ExerciseList list={exercisesReactHooks} />
      <h2>React Web</h2>
      <ExerciseList list={exercisesReactWeb} />
    </>

  );
}
