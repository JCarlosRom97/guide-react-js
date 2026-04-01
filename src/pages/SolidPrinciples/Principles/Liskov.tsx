import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { SolidUrls } from "../../../types";
const Liskov = () => {

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Liskov Substitution Principle (LSP)</h2>
                <p className="solid-description">
                    Subtypes must be replaceable without breaking behavior
                </p>
            </header>
            <article className="solid-block">
                <ExampleItem title="❌ Bad Example" url={SolidUrls.LiskovBad} />

                <article className="solid-block">
                    <ExampleItem title="✅ Good Approach" url={SolidUrls.LiskovGood} />
                    <h3>Explanation</h3>
                    <ul className="left">
                        <li><strong>DisabledButton</strong> should behave like <strong>Button</strong></li>
                        <li>Avoid creating components that <strong>break expected behavior.</strong></li>
                    </ul>
                </article>
            </article>
        </section>
    )
}

export default Liskov;