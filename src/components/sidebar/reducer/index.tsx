const initialState = {
    data: null,
    loading: false,
    error: false,
    done: false,
}

type requi= {
    type: string,
    payload: any,
}

export const pokemonEdit = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_POKEMON_EDIT':
            return payload;

        default:
            return state;
    }
}