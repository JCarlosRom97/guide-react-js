import { CodeBlock } from "../../../components/CodeBlock/CodeBlock";
import { useFetchText } from "../../../hooks/useGetText";

const InterfaceSegregation = () => {
    const { data: dataGoodImp, isLoading: isLoadingGoodImp, isError: isErrorGoodImp, error: errorGoodImp } = useFetchText(
        '/Solid/InterfaceSegregation/goodImplementation.txt'
    );

    const { data: dataBadImp, isLoading: isLoadingBadImp, isError: isErrorBadImplementation, error: errorBadImp } = useFetchText(
        '/Solid/InterfaceSegregation/badImplementation.txt'
    );
    return (
        <section className="ExampleContainer">
            <header>
                <h2>Interface Segregation Principle (ISP)</h2>
                <p className="solid-description">
                    Don’t force components to depend on props they don’t use
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
                    <li>Only pass what is needed.</li>
                    <li>Keeps components <strong>clean and reusable.</strong></li>

                </ul>
            </article>
        </section>
    )
}

export default InterfaceSegregation;