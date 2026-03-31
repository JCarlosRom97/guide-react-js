import { CodeBlock } from "../../../components/CodeBlock/CodeBlock"
import { useFetchText } from "../../../hooks/useGetText";
const blankSpace = "\u00A0";
const Abstraction = () => {

    const { data, isLoading, isError, error } = useFetchText(
        '/OOP/Abstraction.txt'
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
            <h2>Abstraction</h2>
            <p>Abstraction hides internal complexity and exposes only what is necessary.</p>
            <CodeBlock code={data || ""}  />
            <p>
                💡 Explanation <br />

                * The user only interacts with makeCoffee() <br />

                * Internally: <br />

                {blankSpace.repeat(10)}* it boils water <br />

                {blankSpace.repeat(10)}* grinds coffee <br />

                * But those details are hidden <br />
            </p>
        </div>
    )
}

export default Abstraction;