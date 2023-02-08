import { configureStore } from "@reduxjs/toolkit";
import {createStore} from "redux";
import { modal } from "../components/card/reducer";
import { create } from "../components/createPokemonNow/reducer";
import { pokemon } from "../components/personagem/reducer";
import { pokemonEdit } from "../components/sidebar/reducer";
import { reducers } from "../reducers";

const store = configureStore(
   { reducer: {
        pokemonEdit,
        pokemon,
        modal,
        create
        
    } }
);
export default store;