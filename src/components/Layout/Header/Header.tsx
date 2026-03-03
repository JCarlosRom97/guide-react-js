import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {

    return (
        <div className="header">
            <h1>ReactJS Technical Exercises</h1>
            <div className="containerButtonsHeader">
                <Link to={"/"}>Home</Link>
                <button>Exercise</button>
                <div className={`dropdown`}>
                    <Link to="/exercise-1">Exercise 1</Link>
                    <Link to="/exercise-2">Exercise 2</Link>
                    <Link to="/exercise-3">Exercise 3</Link>
                </div>
            </div>
        </div>
    );
}
