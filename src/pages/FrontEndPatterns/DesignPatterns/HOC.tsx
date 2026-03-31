import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const HOC = () =>{
    return (
        <section className="ExampleContainer">
            <h3>5. Higher-Order Components (HOC)</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>A function that wraps a component.</li>
            </ul>
            <ExampleItem url="DesignPatterns/HOC/Example1.txt" />
            <ul className="left">
                <li className="noPoint">🧠 Senior Insight</li>
                <li>⚠️ Problems:</li>
                <ul>
                    <li>Wrapper hell</li>
                    <li>Debugging complexity</li>
                </ul>
                <li>👉 Modern approach:</li>
                <ul>
                    <li>Prefer hooks instead</li>
                </ul>
            </ul>
        </section>
    )
}

export default HOC;