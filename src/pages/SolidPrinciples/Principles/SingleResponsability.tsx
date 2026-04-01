import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { SolidUrls } from "../../../types";
const SingleResponsability = () => {

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Single Responsibility Principle (SRP)</h2>
                <p className="solid-description">
                    A component or module should have only one reason to change.
                </p>
            </header>

            <article className="solid-block">
                <ExampleItem title="❌ Bad Example" url={SolidUrls.SingleResponsabilityBad} />
            </article>

            <article className="solid-block">
                <h3>✅ Good Approach</h3>
                <ul className="left">
                    <li><strong>Hook</strong> → state + fetching logic</li>
                    <li><strong>Service</strong> → API communication</li>
                    <li><strong>Component</strong> → UI</li>
                </ul>
                <ExampleItem url={SolidUrls.SingleResponsabilityGood} />
                <p className="solid-highlight">
                    👉 Easier to test, reuse, and maintain.
                </p>
            </article>
        </section>
    );
};

export default SingleResponsability;