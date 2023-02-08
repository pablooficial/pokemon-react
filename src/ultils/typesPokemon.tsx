interface Props {
    type?: string,
}

interface TypeColor {
    type?: string,
    color?: string,
}

export const typeColorMap: TypeColor[] = [
    { type: 'Normal', color: '#A8A77A' },
    { type: 'Fire', color: '#EE8130' },
    { type: 'Water', color: '#6390F0' },
    { type: 'Electric', color: '#F7D02C' },
    { type: 'Grass', color: '#7AC74C' },
    { type: 'Ice', color: '#96D9D6' },
    { type: 'Fighting', color: '#C22E28' },
    { type: 'Poison', color: '#A33EA1' },
    { type: 'Ground', color: '#E2BF65' },
    { type: 'Flying', color: '#A98FF3' },
    { type: 'Psychic', color: '#F95587' },
    { type: 'Bug', color: '#A6B91A' },
    { type: 'Rock', color: '#B6A136' },
    { type: 'Ghost', color: '#735797' },
    { type: 'Dragon', color: '#6F35FC' },
    { type: 'Dark', color: '#705746' },
    { type: 'Steel', color: '#B7B7CE' },
    { type: 'Fairy', color: '#D685AD' }
];

const TypesPokemon = (type: string) => {
    switch (type) {
        case 'fighting':
            return { type: 'Lutador', color: '#C22E28' };
        case 'normal':
            return { type: 'Normal', color: '#A8A77A' };
        case 'fire':
            return { type: 'Fogo', color: '#EE8130' };
        case 'water':
            return { type: 'Água', color: '#6390F0' };
        case 'electric':
            return { type: 'Elétrico', color: '#F7D02C' };
        case 'grass':
            return { type: 'Grama', color: '#7AC74C' };
        case 'ice':
            return { type: 'Gelo', color: '#96D9D6' };
        case 'poison':
            return { type: 'Venenoso', color: '#A33EA1' };
        case 'ground':
            return { type: 'Terra', color: '#E2BF65' };
        case 'flying':
            return { type: 'Voador', color: '#A98FF3' };
        case 'psychic':
            return { type: 'Psíquico', color: '#F95587' };
        case 'bug':
            return { type: 'Inseto', color: '#A6B91A' };
        case 'rock':
            return { type: 'Pedra', color: '#B6A136' };
        case 'ghost':
            return { type: 'Fantasma', color: '#735797' };
        case 'dragon':
            return { type: 'Dragão', color: '#6F35FC' };
        case 'dark':
            return { type: 'Trevas', color: '#705746' };
        case 'steel':
            return { type: 'Aço', color: '#B7B7CE' };
        case 'fairy':
            return { type: 'Fada', color: '#D685AD' };
        default:
            break;
    }
};

export default TypesPokemon;