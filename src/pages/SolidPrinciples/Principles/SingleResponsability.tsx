import { CodeBlock } from "../../../components/CodeBlock/CodeBlock";
import { useFetchText } from "../../../hooks/useGetText";

const SingleResponsability = () => {
    const { data, isLoading, isError, error } = useFetchText(
        '/Solid/SingleResponsability/badImplementation.txt'
    );

    return (
        <section className="solid-section">
            <header>
                <h2>Single Responsibility Principle (SRP)</h2>
                <p className="solid-description">
                    A component or module should have only one reason to change.
                </p>
            </header>

            <article className="solid-block">
                <h3>❌ Bad Example</h3>

                {isLoading && <p>Loading code...</p>}

                {isError && (
                    <p role="alert" className="error">
                        Error: {error}
                    </p>
                )}

                {!isLoading && !isError && data && (
                    <CodeBlock code={data} />
                )}
            </article>

            <article className="solid-block">
                <h3>✅ Good Approach</h3>

                <ul>
                    <li><strong>Hook</strong> → state + fetching logic</li>
                    <li><strong>Service</strong> → API communication</li>
                    <li><strong>Component</strong> → UI</li>
                </ul>

                <p className="solid-highlight">
                    👉 Easier to test, reuse, and maintain.
                </p>
            </article>
        </section>
    );
};

export default SingleResponsability;