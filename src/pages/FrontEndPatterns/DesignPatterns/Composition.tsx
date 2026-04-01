import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { DesignPatternsUrls } from "../../../types";

const Composition = () =>{
    return (
        <section className="ExampleContainer">
            <h3>10. Composition</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Favor composition over inheritance</li>
            </ul>
            <ExampleItem title="💻 Example" url={DesignPatternsUrls.Composition} />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <li>👉 This is the <strong>core philosophy of React:</strong></li>
                <ul>
                    <li>Everything builds on composition</li>
                    <li>Leads to flexible, decoupled systems</li>
                </ul>
            </ul>
        </section>
    )
}

export default Composition;