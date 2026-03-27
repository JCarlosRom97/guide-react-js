import { CodeBlock } from "../../../components/CodeBlock/CodeBlock";
import { useFetchText } from "../../../hooks/useGetText";

const Liskov = () => {
    const { data: dataGoodImp, isLoading: isLoadingGoodImp, isError: isErrorGoodImp, error: errorGoodImp } = useFetchText(
        '/Solid/Liskov/goodImplementation.txt'
    );

    const { data: dataBadImp, isLoading: isLoadingBadImp, isError: isErrorBadImplementation, error: errorBadImp } = useFetchText(
        '/Solid/Liskov/badImplementation.txt'
    );

    return (
        <section className="solidContainer">
            <header>
                <h2>Liskov Substitution Principle (LSP)</h2>
                <p className="solid-description">
                    Subtypes must be replaceable without breaking behavior
                </p>
            </header>
            <article className="solid-block">
                <h3>❌ Bad Example</h3>

                {isLoadingBadImp && <p>Loading code...</p>}

                {isErrorBadImplementation && (
                    <p role="alert" className="error">
                        Error: {errorBadImp}
                    </p>
                )}

                {!isLoadingBadImp && !isErrorBadImplementation && dataBadImp && (
                    <CodeBlock code={dataBadImp} />
                )}

                <article className="solid-block">
                    <h3>✅ Good Approach</h3>
                    {isLoadingGoodImp && <p>Loading code...</p>}

                    {isErrorGoodImp && (
                        <p role="alert" className="error">
                            Error: {errorGoodImp}
                        </p>
                    )}
                    {!isLoadingGoodImp && !isErrorGoodImp && dataGoodImp && (
                        <CodeBlock code={dataGoodImp} />
                    )}
                    <ul>
                        <li> <strong>Explanation:</strong></li>
                        <li><strong>DisabledButton</strong> should behave like <strong>Button</strong></li>
                        <li>Avoid creating components that <strong>break expected behavior.</strong></li>
                    </ul>
                </article>
            </article>
        </section>
    )
}

export default Liskov;