import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const CompoundComponents = () => {
    return (
        <article className="ExampleContainer">
            <h3>3.- Compound Components</h3>
            <ul className="left">
                <li className="noPoint"><strong>📌 Concept</strong></li>
                <li>Components share implicit state via context</li>
            </ul>
            <ExampleItem title="💻 Example" url="DesignPatterns/CompoundComponents/Example1.txt" />
            <ul className="left">
                <li className="noPoint"><strong>🧠 Senior Insight</strong></li>
                <li>Used in design systems</li>
                <li>Enables clean APIs like:</li>
            </ul>
            <ExampleItem url="DesignPatterns/CompoundComponents/Example2.txt" />
            <ul className="left">
                <li>Reduces prop drilling</li>
            </ul>
        </article>
    )
}


export default CompoundComponents;