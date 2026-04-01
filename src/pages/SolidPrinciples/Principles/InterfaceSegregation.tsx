import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { SolidUrls } from "../../../types";
const InterfaceSegregation = () => {
 
    return (
        <section className="ExampleContainer">
            <header>
                <h2>Interface Segregation Principle (ISP)</h2>
                <p className="solid-description">
                    Don’t force components to depend on props they don’t use
                </p>
            </header>

            <article className="solid-block">
                <ExampleItem title="❌ Bad Example" url={SolidUrls.InterfaceBad} />
            </article>
            <article className="solid-block">
                <h3>✅ Good Approach</h3>
               <ExampleItem title="✅ Good Approach" url={SolidUrls.InterfaceGood} />
               <h3>Explanation</h3>
                <ul className="left">
                    <li>Only pass what is needed.</li>
                    <li>Keeps components <strong>clean and reusable.</strong></li>
                </ul>
            </article>
        </section>
    )
}

export default InterfaceSegregation;