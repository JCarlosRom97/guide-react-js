import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const Headless = () =>{
    return(
        <section className="ExampleContainer">
            <h3>8.- Headless Components</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Logic without UI.</li>
            </ul>
            <ExampleItem title="💻 Example" url="DesignPatterns/Headless/Example.txt" />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <li>🔥 Foundation of:</li>
                <ul>
                    <li>Radix UI</li>
                    <li>Headless UI</li>
                </ul>
                <li>👉 Benefits:</li>
                <ul>
                    <li>Maximun flexibility</li>
                    <li>UI fully customizable</li>
                </ul>
            </ul>
        </section>
    )
}

export default Headless; 