import ExampleItem from "../../../components/ExampleItem/ExampleItem";
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
            <ExampleItem title="🧠 Container" url="/DesignPatterns/ContainerPresentational/Container.txt" />
            <ExampleItem title="🎨 Presentational" url="/DesignPatterns/ContainerPresentational/Presentational.txt" />
            <ul className="left">
                <li>This pattern is <strong>less used today</strong></li>
                <li>Replaced by <strong>Custom Hooks</strong></li>
                <li>Still usefull for <strong>clear separation of concerns</strong></li>
            </ul>
        </section>
    )
}


export default ContainerPresentational;