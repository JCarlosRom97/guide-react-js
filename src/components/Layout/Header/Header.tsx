import './Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {

    return (

        <header className="header">
            <div className="headerContent">
                <img src={`${process.env.PUBLIC_URL}/React.png`} alt="React logo" className="logo" />
                <h1>ReactJS Technical Exercises</h1>
            </div>
            <nav className="nav">
                <Link className="navItem active" to={"/"}>Home</Link>

            </nav>
        </header>
    );
}
