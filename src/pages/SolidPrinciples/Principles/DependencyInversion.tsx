import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { SolidUrls } from "../../../types";
const DependencyInversion = () => {

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Dependency Inversion Principle (DIP)</h2>
                <p className="solid-description">
                    Depend on abstractions, not concrete implementations
                </p>
            </header>
            <article className="solid-block">
                <ExampleItem title="❌ Bad Example" url={SolidUrls.DependencyInversionBad} />
            </article>
            <article className="solid-block">
                <ExampleItem title="✅ Good Approach" url={SolidUrls.DependencyInversionGood} />
                <h3>Explanation:</h3>
                <ul className="left">
                    <li>Logic depends on an <strong>abstraction (fetchFn).</strong></li>
                    <li>Makes testing and flexibility easier.</li>
                </ul>
            </article>
        </section>
    )
}

export default DependencyInversion;