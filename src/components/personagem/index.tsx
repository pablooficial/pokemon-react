import { ComponentAsh, ComponentBallon } from "./styled";
import personagem from "../../assets/images/ashFront.png"
import personagem2 from "../../assets/images/ashLeftLeg.png"
import personagem3 from "../../assets/images/ashRightLeg.png"
import personagem4 from "../../assets/images/ashStop.png"
import ballon from "../../assets/images/searchTooltip.png"
import ballonError from "../../assets/images/tooltipError.png"
import ballonseaching from "../../assets/images/searchingTooltip.png"
import { getApi } from "../../API/API";
import { useDispatch, useSelector } from "react-redux";
import pokemonResponserMapper from "../../API/mapper/pokemon";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../../ultils/localStorage";

type Props = {
    onclick: (event: boolean) => void;
}

const Personagem = ({onclick}:Props) => {
    const [image, setImage] = useState(personagem)
    const [ballonAtencao, setBallonAtencao] = useState(ballon)

    const dispatch = useDispatch();
    const hunter = async (e: any) => {
        const team = getLocalStorage();
        if(!team || team.length < 6){
            animation();
            setBallonAtencao(ballonseaching)
           await getApi()
                .then(response => {
                    dispatch({
                        type: 'SET_POKEMON_DATA',
                        payload: {
                            loading: false,
                            done: true,
                            data: pokemonResponserMapper(response.data),
                        }
                    })
                })
                .catch(error => {
                });
                setBallonAtencao(ballon)
        } else {
            setBallonAtencao(ballonError)
        }
    }
    const pokemon = useSelector((state: any) => state.pokemon);
    useEffect(()=>{
        if(pokemon.done){
            dispatch({
                type: 'SET_MODAL',
                payload: {
                    open: true,
                }
            })
        }
    },[pokemon])

    const animation = () => {
        setTimeout(() => {
            setImage(personagem2)
        }, 300);
        setTimeout(() => {
            setImage(personagem4)
        }, 600);
        setTimeout(() => {
            setImage(personagem3)
        }, 900);
        setTimeout(() => {
            setImage(personagem4)
        }, 1200);
        setTimeout(() => {
            setImage(personagem2)
        }, 1500);
        setTimeout(() => {
            setImage(personagem4)
        }, 1800);
        setTimeout(() => {
            setImage(personagem)
        }, 1800);
    }

    return(
        <>
            <ComponentAsh src={image} onClick={hunter}></ComponentAsh>
            <ComponentBallon className="Ballon" src={ballonAtencao}></ComponentBallon>
        </>
    )
}

export default Personagem;