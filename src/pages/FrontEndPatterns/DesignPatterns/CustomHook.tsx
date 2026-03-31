import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const CustomHook = () => {
    return (
        <section className="ExampleContainer">
            <h3>2.- Custom Hook</h3>
            <ul className="left">
                <li className="noPoint"><strong>Concept:</strong></li>
                <li>Extract reusable logic into hooks.</li>
            </ul>
            <ExampleItem title="💻 Example" url="DesignPatterns/CustomHook/Example.txt" />
            <ExampleItem url="DesignPatterns/CustomHook/Example2.txt" />
        </section>
    )
}

export default CustomHook;
