import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { SolidUrls } from "../../../types";
const OpenClosedResponsability = () => {

    return (
        <section className="ExampleContainer">
            <header>
                <h2>Open/Closed Responsability (OCP)</h2>
                <p className="solid-description">
                    Open for extension, closed for modification
                </p>
            </header>

            <article className="solid-block">
                <ExampleItem title="❌ Bad Example" url={SolidUrls.OpenClosedBad} />
            </article>
            <article className="solid-block">
                <ExampleItem title="✅ Good Approach" url={SolidUrls.OpenClosedGood} />
                <ul className="left">
                    <h3>Explanation</h3>
                    <li>You don't modify the component to add new styles</li>
                    <li>You <strong>extend behavior via props</strong></li>

                </ul>
            </article>
        </section>
    )
}

export default OpenClosedResponsability;    