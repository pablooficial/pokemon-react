const initialState = {
    pokemon: null,
    open: false,
}

type requi= {
    type: string,
    payload: any,
}

export const create = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_CREATE':
            return payload;

        default:
            return state;
    }
}