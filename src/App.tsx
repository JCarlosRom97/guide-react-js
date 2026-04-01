import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { SearchDebounce } from "./pages/SearchDebounce";
import { ListSorting } from "./pages/ListSorting";
import { CustomHook } from "./pages/CustomHook";
import { Dashboard } from "./pages/Dashboard";
import { Header } from './components/Layout/Header';
import { Async } from './pages/Async';
import { Pokemon } from './pages/Pokemon/Home';
import { Detail } from './pages/Pokemon/Detail';
import { OOP } from './pages/OOP';
import { Solid } from './pages/SolidPrinciples';
import FrontEndPatters from './pages/FrontEndPatterns/FrontEndPatterns';
import { Footer } from './components/Layout/Footer';

// React Hooks
import { UseEffectScreen } from './pages/useEffect';
export const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='appContainer'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/search-debounce" element={<SearchDebounce />} />
                    <Route path="/list-sorting" element={<ListSorting />} />
                    <Route path="/custom-hook" element={<CustomHook />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/pokemon' element={<Pokemon />} />
                    <Route path='/pokemon/detail/:id' element={<Detail />} />
                    {/* React hooks */}
                    <Route path="/useEffect" element={<UseEffectScreen />} />
                    <Route path="/async" element={<Async />} />
                    <Route path="/design-patterns" element={<FrontEndPatters />} />
                    {/* JS Core */}
                    <Route path="/oop" element={<OOP />} /> 
                    <Route path="/solid" element={<Solid />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}