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
    base_stat:string
    stat:{
      name:string
    }
  }[]
}