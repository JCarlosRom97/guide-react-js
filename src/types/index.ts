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
const withBase = (path: string) => `${process.env.PUBLIC_URL}${path}`;

/* =======================
   SOLID
======================= */
export const SolidUrls = {
  SingleResponsabilityGood: withBase("/Solid/SingleResponsability/goodImplementation.txt"),
  SingleResponsabilityBad: withBase("/Solid/SingleResponsability/badImplementation.txt"),
  OpenClosedGood: withBase("/Solid/OpenClosed/goodImplementation.txt"),
  OpenClosedBad: withBase("/Solid/OpenClosed/badImplementation.txt"),
  LiskovGood: withBase("/Solid/Liskov/goodImplementation.txt"),
  LiskovBad: withBase("/Solid/Liskov/badImplementation.txt"),
  InterfaceGood: withBase("/Solid/InterfaceSegregation/goodImplementation.txt"),
  InterfaceBad: withBase("/Solid/InterfaceSegregation/badImplementation.txt"),
  DependencyInversionGood: withBase("/Solid/DependencyInversion/goodImplementation.txt"),
  DependencyInversionBad: withBase("/Solid/DependencyInversion/badImplementation.txt")
} as const;

/* =======================
   OOP
======================= */
export const OOPUrls = {
  Abstraction: withBase("/OOP/Abstraction.txt"),
  Encapsulation: withBase("/OOP/Encapsulation.txt"),
  Inheritance: withBase("/OOP/Inheritance.txt"),
  Polymorphism: withBase("/OOP/Polymorphism.txt")
} as const;

/* =======================
   DESIGN PATTERNS
======================= */
export const DesignPatternsUrls = {
  Composition: withBase("/DesignPatterns/Composition/Example.txt"),
  CompoundExample1: withBase("/DesignPatterns/CompoundComponents/Example1.txt"),
  CompoundExample2: withBase("/DesignPatterns/CompoundComponents/Example2.txt"),
  Container: withBase("/DesignPatterns/ContainerPresentational/Container.txt"),
  Presentational: withBase("/DesignPatterns/ContainerPresentational/Presentational.txt"),
  Controlled: withBase("/DesignPatterns/ControlledUncontrolled/Controlled.txt"),
  Uncontrolled: withBase("/DesignPatterns/ControlledUncontrolled/Uncontrolled.txt"),
  CustomHookExample1: withBase("/DesignPatterns/CustomHook/Example.txt"),
  CustomHookExample2: withBase("/DesignPatterns/CustomHook/Example2.txt"),
  Headless: withBase("/DesignPatterns/Headless/Example.txt"),
  HOC: withBase("/DesignPatterns/HOC/Example1.txt"),
  Provider: withBase("/DesignPatterns/Provider/Example1.txt"),
  RenderPropsExample1: withBase("/DesignPatterns/RenderProps/Example1.txt"),
  RenderPropsExample2: withBase("/DesignPatterns/RenderProps/Example2.txt"),
  StateReducer: withBase("/DesignPatterns/StateReducer/Example.txt")
} as const;