import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const RenderProps = () => {
    return (
        <section className="ExampleContainer" >
            <h4>4.- Render Props</h4>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Pass a function to control rendering</li>
            </ul>
            <ExampleItem title="💻 Example" url="DesignPatterns/RenderProps/Example1.txt" />
            <ExampleItem url="DesignPatterns/RenderProps/Example2.txt" />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <li>⚠️ Downsides:</li>
                <ul>
                    <li>Harder to read</li>
                    <li>Nested JSX</li>
                </ul>
                <li>👉 Today:</li>
                <ul>
                    <li>Mostly replaced by hooks</li>
                    <li>Still useful for headless libraries</li>
                </ul>
            </ul>
        </section>
    )
}

export default RenderProps;