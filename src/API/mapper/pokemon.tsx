export type pokemonType = {
    name?: string | undefined,
    stats?: statsPokemon | undefined,
    height?: number | undefined,
    weight?: number | undefined,
    types?: typePokemon | undefined,
    abilities?: abilities | undefined,
    sprites?: sprites | undefined,
    created?: boolean,
    wild?: boolean,
}

type statsPokemon = [
    {
        base_stat?: number | undefined,
        stats?: statsName | undefined,
    }
]

type statsName = {
    name?: string | undefined
}

type typePokemon = [
    {
        slot?: number | undefined,
        type?: typeMonster | undefined
    }
]

type typeMonster = {
    name?: string | undefined
}

type abilities = [
    {
        ability?: ability | undefined
    }
]

type ability = {
    name?: string | undefined
}

type sprites = {
    other?: other
}

type other = {
    home: home

}

type home = {
    front_default: string
}

const pokemonResponserMapper = (pokemon: any) => {
    if(!pokemon){
        return {};
    }

    const {
        name,
        stats,
        height,
        weight,
        types,
        abilities,
        sprites,
    }: pokemonType = pokemon;

    return {
        name,
        stats,
        height,
        weight,
        types,
        abilities,
        sprites,
    };
}

export default pokemonResponserMapper;