import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { DesignPatternsUrls } from "../../../types";

const CustomHook = () => {
    return (
        <section className="ExampleContainer">
            <h3>2.- Custom Hook</h3>
            <ul className="left">
                <li className="noPoint"><strong>Concept:</strong></li>
                <li>Extract reusable logic into hooks.</li>
            </ul>
            <ExampleItem title="💻 Example" url={DesignPatternsUrls.CustomHookExample1} />
            <ExampleItem url={DesignPatternsUrls.CustomHookExample2} />
        </section>
    )
}

export default CustomHook;
