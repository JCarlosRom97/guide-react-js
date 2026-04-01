import ExampleItem from "../../../components/ExampleItem/ExampleItem";
import { DesignPatternsUrls } from "../../../types";
const ContainerPresentational = () => {

    return (
        <section className="ExampleContainer">
            <h3>1.- Container Representational</h3>
            <ul className="left">
                <li className="noPoint"> <strong>Concept:</strong></li>
                <li>Separate:</li>
                <li><strong>Logic (data fetching, state, effects)</strong> → Container</li>
                <li><strong>UI (rendering only) → Presentational</strong></li>
            </ul>
            <ExampleItem title="🧠 Container" url={DesignPatternsUrls.Container} />
            <ExampleItem title="🎨 Presentational" url={DesignPatternsUrls.Presentational} />
            <ul className="left">
                <li>This pattern is <strong>less used today</strong></li>
                <li>Replaced by <strong>Custom Hooks</strong></li>
                <li>Still usefull for <strong>clear separation of concerns</strong></li>
            </ul>
        </section>
    )
}


export default ContainerPresentational;