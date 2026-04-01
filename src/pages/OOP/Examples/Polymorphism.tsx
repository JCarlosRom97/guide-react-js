import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { OOPUrls } from "../../../types";
const Polymorphism = () => {

    return (
        <div className="ExampleContainer">
            <h2>Polymorphism</h2>
            <p>Polymorphism allows the same method to behave differently depending on the object.</p>
            <ExampleItem url={OOPUrls.Polymorphism} />
            <h3>💡 Explanation </h3>
            <ul className="left">
                <li>Different classes (Cat, Cow)</li>
                <li>Same method name: makeSound()</li>
                <li>The function playSound:</li>
                <ul>
                    <li>doesn’t care about the type</li>
                    <li>just calls the method</li>
                </ul>
            </ul>
        </div>
    )
}

export default Polymorphism;