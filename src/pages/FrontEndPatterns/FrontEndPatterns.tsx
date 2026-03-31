import { ContainerPresentational, CustomHook, Compound, RenderProps, HOC, Provider, ControlledUncontrolled, Headless, StateReducer, Composition, Info } from "./DesignPatterns";
const FrontEndPatters = () => {
    return (
        <>
            <h3>FrontEnd Design Patterns</h3>
            {/* Patterns section */}
            <ContainerPresentational />
            <CustomHook />
            <Compound />
            <RenderProps />
            <HOC />
            <Provider />
            <ControlledUncontrolled />
            <Headless />
            <StateReducer />
            <Composition />
            {/* Info section  */}
            <Info/>
        </>
    )
}

export default FrontEndPatters;