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

export const pokemon = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_POKEMON_DATA':
            return payload;

        default:
            return state;
    }
}