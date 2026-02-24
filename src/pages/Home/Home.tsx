
import './Home.css';
import { Header } from '../../components/Layout/Header';
import { exercisesJson } from '../../data/exercises';
import { ExerciseList } from '../../components/ExercisesList';
const Home = () => {
  console.log(exercisesJson);
  
  return (  
    <div className="App">
      <Header />
      <ExerciseList list={exercisesJson} />
    </div>
  );
}

export default Home;
