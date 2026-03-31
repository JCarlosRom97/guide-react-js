import { CodeBlock } from "../../../components/CodeBlock/CodeBlock"
import { useFetchText } from "../../../hooks/useGetText";
const blankSpace = "\u00A0";
const Inheritance = () => {

    const { data, isLoading, isError, error } = useFetchText(
        '/OOP/Inheritance.txt'
    );

    if (isError)
        return (
            <p>{error}</p>
        )

    if(isLoading)
        return (
            <p>Loading</p>
        )


    return (
        <div className="ExampleContainer">
            <h2>Inheritance</h2>
            <p>Inheritance allows me to reuse code from a base class and specialize it in child classes.</p>
            <CodeBlock code={data || ""} />
            <p>💡 Explanation  <br />

                * Dog inherits from Animal<br />

                * It gets:<br />

                {blankSpace.repeat(10)}* the name property<br />

                {blankSpace.repeat(10)}* all methods from Animal<br />

                * But it can also override behavior<br />

                👉 Here, makeSound() is overridden</p>
        </div>
    )
}

export default Inheritance;