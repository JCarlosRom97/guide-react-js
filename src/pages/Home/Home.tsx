import { exercisesReactWeb } from '../../data/exercisesReactWeb';
import { exercisesReactHooks } from '../../data/exercisesReactHooks';
import { ExerciseList } from '../../components/ExercisesList';
export const Home = () => {

  return (
    <>
      <h3>React Core</h3>
      <ExerciseList list={exercisesReactHooks} />
      <h3>React Web</h3>
      <ExerciseList list={exercisesReactWeb} />
    </>

  );
}
