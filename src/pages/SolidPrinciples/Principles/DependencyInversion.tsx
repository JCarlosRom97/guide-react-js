import { CodeBlock } from "../../../components/CodeBlock/CodeBlock";
import { useFetchText } from "../../../hooks/useGetText";

const DependencyInversion = () => {

    const { data: dataGoodImp, isLoading: isLoadingGoodImp, isError: isErrorGoodImp, error: errorGoodImp } = useFetchText(
        '/Solid/DependencyInversion/goodImplementation.txt'
    );

    const { data: dataBadImp, isLoading: isLoadingBadImp, isError: isErrorBadImplementation, error: errorBadImp } = useFetchText(
        '/Solid/DependencyInversion/badImplementation.txt'
    );

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Dependency Inversion Principle (DIP)</h2>
                <p className="solid-description">
                    Depend on abstractions, not concrete implementations
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
                {!isLoadingGoodImp && !isErrorGoodImp && dataGoodImp && (
                    <CodeBlock code={dataGoodImp} />
                )}
                <ul>
                    <li> <strong>Explanation:</strong></li>
                    <li>Logic depends on an <strong>abstraction (fetchFn).</strong></li>
                    <li>Makes testing and flexibility easier.</li>

                </ul>
            </article>
        </section>
    )
}

export default DependencyInversion;