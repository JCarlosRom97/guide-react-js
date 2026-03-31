import { CodeBlock } from "../../../components/CodeBlock/CodeBlock"
import { useFetchText } from "../../../hooks/useGetText";
const blankSpace = "\u00A0";
const Encapsulation = () => {

    const { data, isLoading, isError, error } = useFetchText(
        '/OOP/Encapsulation.txt'
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
            <h2>Encapsulation</h2>
            <p>Encapsulation protects internal data and controls how it is accessed or modified.</p>
            <CodeBlock code={data || ""} />
            <p>💡 Explanation <br />

                {blankSpace.repeat(10)}#balance is private <br />

                {blankSpace.repeat(10)}You cannot access it directly:</p>
            <CodeBlock code={'account.#balance'} />
            <p>*You must use: <br />

                {blankSpace.repeat(10)}deposit() <br />

                {blankSpace.repeat(10)}getBalance()</p>
        </div>
    )
}

export default Encapsulation;