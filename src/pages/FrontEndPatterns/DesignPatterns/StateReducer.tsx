import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { DesignPatternsUrls } from "../../../types";
const StateReducer = () =>{
    return (
        <section className="ExampleContainer">
            <h3>9.- State Reducer Pattern</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Let consumers consume state transitions</li>
            </ul>
            <ExampleItem title="💻 Example" url={DesignPatternsUrls.StateReducer} />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <ul>
                    <li>Used in advanced libraries</li>
                    <li>Enables extensibility without modifying core logic</li>
                </ul>
            </ul>
        </section>
    )
}

export default StateReducer;