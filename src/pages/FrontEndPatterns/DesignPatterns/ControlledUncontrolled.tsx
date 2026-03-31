import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const ControlledUncontrolled = () => {
    return (
        <section className="ExampleContainer">
            <h3>7.- Controlled vs Uncontrolled Components</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Who owns the state</li>
            </ul>
            <h3 className="left">💻 Example</h3>
            <ExampleItem title="Controlled" url="DesignPatterns/ControlledUncontrolled/Example1.txt" />
            <ExampleItem title="Uncontrolled" url="DesignPatterns/ControlledUncontrolled/Example2.txt" />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <ul>
                    <li>Controlled → predictable, easier validation</li>
                    <li>Uncontrolled → better performance in large forms</li>
                </ul>
            </ul>
        </section>
    )
}

export default ControlledUncontrolled;