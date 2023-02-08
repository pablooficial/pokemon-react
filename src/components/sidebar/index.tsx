import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonResponserMapper, { pokemonType } from "../../API/mapper/pokemon";
import { getLocalStorage } from "../../ultils/localStorage";
import CapturedPokemon from "../capturedPokemon";
import plus from "../../assets/images/plus.png"
import { ComponentWraper } from "./styled";

type Props = {
    onclick: (open: boolean) => void;
}

const Sidebar = ({ onclick }: Props) => {
    let pokemonEdit = useSelector((state: any) => state.pokemonEdit);
    const [team, setTeam] = useState([])
    const dispatch = useDispatch();
    const openPokemon = async (event: any) => {
        // abrir modal
        const index = event.target.getAttribute('data-index');
        
            dispatch({
                type: 'SET_MODAL',
                payload: {
                    open: true,
                    index: index,
                    edit: true,
                }
            })
    }

    useEffect(()=> {
        setTeam(pokemonEdit.data)
    },[pokemonEdit])

    useEffect(()=> {
    //    const teamLocalStorage = getLocalStorage();
    //     setTeam(teamLocalStorage)
        localStorage.clear();
    },[])

    const addNewPokemon = () => {
        dispatch({
            type: 'SET_CREATE',
            payload: {
                open: true,
                edit: true,
            }
        })
    }
    return (
        <ComponentWraper>
            {
                team?.map((pokemon: any, index) => {
                    return <CapturedPokemon index={index} backgroundColor="#00D68F" backgroundImg={pokemon?.data?.sprites.other.home.front_default} borderColor="#004A45" key={index} onclick={openPokemon}></CapturedPokemon>
                })
            }
            <CapturedPokemon backgroundColor="#FF3D71" borderColor="#DB2C66" onclick={addNewPokemon}><img src={plus} alt="add"></img></CapturedPokemon>
        </ComponentWraper>
    )
}

export default Sidebar;