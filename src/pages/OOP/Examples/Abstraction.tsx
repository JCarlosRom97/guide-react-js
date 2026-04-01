import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const Abstraction = () => {

    return (
        <div className="ExampleContainer">
            <h2>Abstraction</h2>
            <p>Abstraction hides internal complexity and exposes only what is necessary.</p>
            <ExampleItem url="/OOP/Abstraction.txt" />
            <h3 className="left">Explanation</h3>

            <ul className="left">
                <li>The user only interacts with makeCoffee()</li>
                <li>Internally:</li>
                <ul>
                    <li>it boils water</li>
                    <li>grinds coffee</li>
                </ul>
                <li>But those details are hidden</li>
            </ul>
        </div>
    )
}

export default Abstraction;