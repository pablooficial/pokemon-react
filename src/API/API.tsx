import axios from 'axios';

export const UrlApi = 'https://pokeapi.co/api/v2/pokemon/';

export const getApi = async () => {
    const randomNumber = Math.floor(Math.random() * 806) + 1;
    return axios.get(UrlApi + randomNumber);
}