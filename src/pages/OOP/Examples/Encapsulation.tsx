import { CodeBlock } from "../../../components/CodeBlock/CodeBlock"
import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { OOPUrls } from "../../../types";
const Encapsulation = () => {

    return (
        <div className="ExampleContainer">
            <h2>Encapsulation</h2>
            <p>Encapsulation protects internal data and controls how it is accessed or modified.</p>
            <ExampleItem url={OOPUrls.Encapsulation} />
            <h3>💡 Explanation</h3>

            <ul className="left">
                <li>#balance is private</li>
                <li>You cannot access it directly:</li>
            </ul>
            <CodeBlock code={'account.#balance'} />
            <ul className="left">
                <li>You must use: </li>
                <ul>
                    <li>deposit()</li>
                    <li>getBalance()</li>
                </ul>
            </ul>
        </div>
    )
}

export default Encapsulation;