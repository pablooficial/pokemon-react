const initialState = {
    pokemon: null,
    open: false,
}

type requi= {
    type: string,
    payload: any,
}

export const modal = (state = initialState, { type, payload }: requi) => {
    switch (type) {
        case 'SET_MODAL':
            return payload;

        default:
            return state;
    }
}