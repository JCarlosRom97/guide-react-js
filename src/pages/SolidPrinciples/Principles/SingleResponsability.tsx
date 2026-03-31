import { CodeBlock } from "../../../components/CodeBlock/CodeBlock";
import { useFetchText } from "../../../hooks/useGetText";

const SingleResponsability = () => {
    const { data: dataGoodImp, isLoading: isLoadingGoodImp, isError: isErrorGoodImp, error: errorGoodImp } = useFetchText(
        '/Solid/SingleResponsability/goodImplementation.txt'
    );

    const { data: dataBadImp, isLoading: isLoadingBadImp, isError: isErrorBadImplementation, error: errorBadImp } = useFetchText(
        '/Solid/SingleResponsability/badImplementation.txt'
    );

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Single Responsibility Principle (SRP)</h2>
                <p className="solid-description">
                    A component or module should have only one reason to change.
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
            </article>

            <article className="solid-block">
                <h3>✅ Good Approach</h3>
                {isLoadingGoodImp && <p>Loading code...</p>}

                {isErrorGoodImp && (
                    <p role="alert" className="error">
                        Error: {errorGoodImp}
                    </p>
                )}
                <ul>
                    <li><strong>Hook</strong> → state + fetching logic</li>
                    <li><strong>Service</strong> → API communication</li>
                    <li><strong>Component</strong> → UI</li>
                </ul>
                {!isLoadingGoodImp && !isErrorGoodImp && dataGoodImp && (
                    <CodeBlock code={dataGoodImp} />
                )}
                <p className="solid-highlight">
                    👉 Easier to test, reuse, and maintain.
                </p>
            </article>
        </section>
    );
};

export default SingleResponsability;