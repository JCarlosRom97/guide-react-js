import './styles.css'
import { useEffect, useState } from 'react';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
export const OOP = () => {
    const blankSpace = "\u00A0";
    const [codeAbstraction, setCodeAbstraction] = useState("");
    const [codeEncapsulation, setCodeEncapsulation] = useState("");
    const [codeInheritance, setCodeInheritance] = useState("");
    const [codePolymorphism, setCodePolymorphism] = useState("");

    useEffect(() => {
        async function getCode() {
            await fetchCode('/OOP/Abstraction.txt', setCodeAbstraction);
            await fetchCode('/OOP/Encapsulation.txt', setCodeEncapsulation);
            await fetchCode('/OOP/Inheritance.txt', setCodeInheritance);
            await fetchCode('/OOP/Polymorphism.txt', setCodePolymorphism);
        }

        getCode();
    }, []);

    const fetchCode = async (url: string, setter: any) => {
        fetch(url)
            .then(res => res.text())
            .then(setter);
    }

    return (
        <>
            <div className="oopContainer">
                <h2>Inheritance</h2>
                <p>Inheritance allows me to reuse code from a base class and specialize it in child classes.</p>
                <CodeBlock code={codeInheritance} />
                <p>💡 Explanation  <br />

                    * Dog inherits from Animal<br />

                    * It gets:<br />

                    {blankSpace.repeat(10)}* the name property<br />

                    {blankSpace.repeat(10)}* all methods from Animal<br />

                    * But it can also override behavior<br />

                    👉 Here, makeSound() is overridden</p>
            </div>
            <div className="oopContainer">
                <h1>OOP</h1>
                <h2>Abstraction</h2>
                <p>Abstraction hides internal complexity and exposes only what is necessary.</p>
                <CodeBlock code={codeAbstraction} />
                <p>
                    💡 Explanation <br />

                    * The user only interacts with makeCoffee() <br />

                    * Internally: <br />

                    {blankSpace.repeat(10)}* it boils water <br />

                    {blankSpace.repeat(10)}* grinds coffee <br />

                    * But those details are hidden <br />
                </p>
            </div>
            <div className="oopContainer">
                <h2>Encapsulation</h2>
                <p>Encapsulation protects internal data and controls how it is accessed or modified.</p>
                <CodeBlock code={codeEncapsulation} />
                <p>💡 Explanation <br />

                    {blankSpace.repeat(10)}#balance is private <br />

                    {blankSpace.repeat(10)}You cannot access it directly:</p>
                <CodeBlock code={'account.#balance'} />
                <p>*You must use: <br/>

                    {blankSpace.repeat(10)}deposit() <br/>

                    {blankSpace.repeat(10)}getBalance()</p>
            </div>
            <div className="oopContainer">
                <h2>Polymorphism</h2>
                <p>Polymorphism allows the same method to behave differently depending on the object.</p>
                <CodeBlock code={codePolymorphism} />
                <p>💡 Explanation <br />

                    {blankSpace.repeat(5)}* Different classes (Cat, Cow) <br />

                    {blankSpace.repeat(5)}* Same method name: makeSound() <br />

                    {blankSpace.repeat(5)}* The function playSound: <br />

                    {blankSpace.repeat(10)}* doesn’t care about the type <br />

                    {blankSpace.repeat(10)}* just calls the method</p>
            </div>
        </>
    )
}

