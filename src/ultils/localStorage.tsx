import { pokemonType } from "../API/mapper/pokemon"

const setLocalStorage = (pokemon: pokemonType, wild: boolean, team: [pokemonType], created: boolean) => {
    const pokemontest = pokemon;

    if(!team){
        team = [pokemontest];
    } else {
        team.push(pokemontest);
    }
    localStorage.setItem('team', JSON.stringify(team));
}

export const verifyLocalStorage = (pokemon: pokemonType, wild = false, created = false) => {
    const teamLocalStorage = JSON.parse(localStorage.getItem("team")!);

    if(teamLocalStorage?.length < 6 || teamLocalStorage == null){
        setLocalStorage(pokemon, wild, teamLocalStorage, created);
    }
}

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("team")!);
}

export const altLocalStorage = (index: number, pokemon: any) => {
    const team = getLocalStorage();
    team[index] = pokemon;
    localStorage.setItem('team', JSON.stringify(team));
}

export const removerLocalStorage = (index: number) => {
    const team = getLocalStorage();
    team.splice(index, 1);
    localStorage.setItem('team', JSON.stringify(team));
}

export const alterName = (name: string, index: number) => {
    const team = getLocalStorage();
    team[index].name = name;
    localStorage.setItem('team', JSON.stringify(team));
}