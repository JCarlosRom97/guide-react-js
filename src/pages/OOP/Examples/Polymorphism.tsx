import { CodeBlock } from "../../../components/CodeBlock/CodeBlock"
import { useFetchText } from "../../../hooks/useGetText";
const blankSpace = "\u00A0";
const Polymorphism = () => {

    const { data, isLoading, isError, error } = useFetchText(
        '/OOP/Polymorphism.txt'
    );

    if (isError)
        return (
            <p>{error}</p>
        )

    if (isLoading)
        return (
            <p>Loading</p>
        )


    return (
        <div className="ExampleContainer">
            <h2>Polymorphism</h2>
            <p>Polymorphism allows the same method to behave differently depending on the object.</p>
            <CodeBlock code={data || ''} />
            <p>💡 Explanation <br />

                {blankSpace.repeat(5)}* Different classes (Cat, Cow) <br />

                {blankSpace.repeat(5)}* Same method name: makeSound() <br />

                {blankSpace.repeat(5)}* The function playSound: <br />

                {blankSpace.repeat(10)}* doesn’t care about the type <br />

                {blankSpace.repeat(10)}* just calls the method</p>
        </div>
    )
}

export default Polymorphism;