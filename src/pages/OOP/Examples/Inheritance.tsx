import ExampleItem from "../../../components/ExampleItem/ExampleItem";

const Inheritance = () => {

    return (
        <div className="ExampleContainer">
            <h2>Inheritance</h2>
            <p>Inheritance allows me to reuse code from a base class and specialize it in child classes.</p>
            <ExampleItem url="/OOP/Inheritance.txt" />

            <h3 className="left">💡 Explanation</h3>

            <ul className="left">
                <li>Dogs inherits from Animal</li>
                <li>It gets:</li>
                <ul>
                    <li>The name property</li>
                    <li>All methods from Animal</li>
                </ul>
                <li>But is can also override behavior</li>
                <li> 👉 Here, makeSound() is overridden</li>
            </ul>
        </div>
    )
}

export default Inheritance;