import { combineReducers } from "redux";
import { modal } from "../components/card/reducer";
import { pokemon } from "../components/personagem/reducer";

export const reducers = () => {
    combineReducers({
        pokemon,
        modal
    })
}