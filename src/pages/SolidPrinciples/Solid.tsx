import SingleResponsability from './Principles/SingleResponsability';
import OpenClosedResponsability from './Principles/OpenClosedResponsability';
import Liskov from './Principles/Liskov';
import InterfaceSegregation from './Principles/InterfaceSegregation';
import DependencyInversion from './Principles/DependencyInversion';
export const Solid = () => {

    return (
        <>
            <SingleResponsability />
            <OpenClosedResponsability />
            <Liskov />
            <InterfaceSegregation />
            <DependencyInversion/>
        </>
    )
}