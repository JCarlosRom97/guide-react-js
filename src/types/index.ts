export type Exercise = {
  id: number,
  name: string,
  url: string
}

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
};

export type User = {
  id: number,
  name: string
}

export type pokemonListType = {
  name: string,
  url: string
}

export type PokemonDetail = {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    front_default: string | null
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  abilities: {
    ability: {
      name: string
      url: string
    }
  }[]
  stats: {
    base_stat: string
    stat: {
      name: string
    }
  }[]
}
/* ENUMS */
export enum SolidUrls {
  SingleResponsabilityGood = "/Solid/SingleResponsability/goodImplementation.txt",
  SingleResponsabilityBad = "/Solid/SingleResponsability/badImplementation.txt",
  OpenClosedGood = "/Solid/OpenClosed/goodImplementation.txt",
  OpenClosedBad = "/Solid/OpenClosed/badImplementation.txt",
  LiskovGood = "/Solid/Liskov/goodImplementation.txt",
  LiskovBad = "/Solid/Liskov/badImplementation.txt",
  InterfaceGood = "/Solid/InterfaceSegregation/goodImplementation.txt",
  InterfaceBad = "/Solid/InterfaceSegregation/badImplementation.txt",
  DependencyInversionGood = "/Solid/DependencyInversion/goodImplementation.txt",
  DependencyInversionBad = "/Solid/DependencyInversion/badImplementation.txt"
}

export enum OOPUrls {
  Abstraction = "/OOP/Abstraction.txt",
  Encapsulation = "/OOP/Encapsulation.txt",
  Inheritance = "/OOP/Inheritance.txt",
  Polymorphism = "/OOP/Polymorphism.txt"
}

export enum DesignPatternsUrls {
  Composition = "DesignPatterns/Composition/Example.txt",
  CompoundExample1 = "DesignPatterns/CompoundComponents/Example1.txt",
  CompoundExample2 = "DesignPatterns/CompoundComponents/Example2.txt",
  Container = "/DesignPatterns/ContainerPresentational/Container.txt",
  Presentational = "/DesignPatterns/ContainerPresentational/Presentational.txt",
  Controlled = "DesignPatterns/ControlledUncontrolled/Controlled.txt",
  Uncontrolled = "DesignPatterns/ControlledUncontrolled/Uncontrolled.txt",
  CustomHookExample1 = "DesignPatterns/CustomHook/Example.txt",
  CustomHookExample2 = "DesignPatterns/CustomHook/Example2.txt",
  Headless = "DesignPatterns/Headless/Example.txt",
  HOC = "DesignPatterns/HOC/Example1.txt",
  Provider = "DesignPatterns/Provider/Example1.txt",
  RenderPropsExample1 = "DesignPatterns/RenderProps/Example1.txt",
  RenderPropsExample2 = "DesignPatterns/RenderProps/Example2.txt",
  StateReducer = "DesignPatterns/StateReducer/Example.txt"
}