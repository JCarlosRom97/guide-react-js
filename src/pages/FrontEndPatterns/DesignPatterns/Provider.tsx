import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { DesignPatternsUrls } from "../../../types";

const Provider = () =>{
    return (
        <section className="ExampleContainer">
            <h3>6.- Provider Pattern (Context API)</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Global shared state without prop drilling</li>
            </ul>
            <ExampleItem title="💻 Example" url={DesignPatternsUrls.Provider} />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <li>⚠️ Pitfall:</li>
                    <ul>
                        <li>Unnecessary re-renders</li>
                    </ul>
                <li>👉 Solutions:</li>
                <ul>
                    <li>Split contexts</li>
                    <li>Memoize values</li>
                    <li>Use zustand / Redux Toolkit when scaling</li>
                </ul>
            </ul>
        </section>
    )
}

export default Provider;