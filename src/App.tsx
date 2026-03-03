import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { SearchDebounce } from "./pages/SearchDebounce";
import { ListSorting } from "./pages/ListSorting";
import { CustomHook } from "./pages/CustomHook";
import { Dashboard } from "./pages/Dashboard";
import { Header } from './components/Layout/Header';
// React Hooks
import { UseEffectScreen } from './pages/useEffect';
export const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/search-debounce" element={<SearchDebounce />} />
                <Route path="/list-sorting" element={<ListSorting />} />
                <Route path="/custom-hook" element={<CustomHook />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* React hooks */}
                  <Route path="/useEffect" element={<UseEffectScreen />} />
            </Routes>
        </div>
    )
}