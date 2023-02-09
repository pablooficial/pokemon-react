import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonResponserMapper, { pokemonType } from "../../API/mapper/pokemon";
import { getLocalStorage } from "../../ultils/localStorage";
import fixed from "../../assets/images/Default.png";
import CapturedPokemon from "../capturedPokemon";
import plus from "../../assets/images/plus.png";
import { ComponentWraper } from "./styled";
import { pokemon } from "../personagem/reducer/index";

type Props = {
  onclick: (open: boolean) => void;
};

const Sidebar = ({ onclick }: Props) => {
  let pokemonEdit = useSelector((state: any) => state.pokemonEdit);
  const [team, setTeam]: any = useState(["?", "?", "?", "?", "?", "?"]);
  const dispatch = useDispatch();
  const openPokemon = async (event: any, pokemon: any) => {
    if (pokemon != "?") {
      // abrir modal
      const index = event.target.getAttribute("data-index");

      dispatch({
        type: "SET_MODAL",
        payload: {
          open: true,
          index: index,
          edit: true,
        },
      });
    }
  };
  useEffect(() => {
    const teamLocalStorage = getLocalStorage();
    setTeam(teamLocalStorage);
    addPokemon(teamLocalStorage);
    //   localStorage.clear();
  }, []);

  useEffect(() => {
    addPokemon();
  }, [pokemonEdit]);

  const addPokemon = (pokeList?: any) => {
    let a = [];
    let pokes = pokemonEdit?.data || [];
    for (let i = 0; i < 6 - pokes?.length; i++) {
      a.push("?");
    }
    a = [...pokes, ...a];
    setTeam(a);
  };

  const addNewPokemon = () => {
    dispatch({
      type: "SET_CREATE",
      payload: {
        open: true,
        edit: true,
      },
    });
  };
  return (
    <ComponentWraper>
      {[...team]?.map((pokemon: any, index: number) => {
        let imgName =
          pokemon == "?"
            ? fixed
            : pokemon?.data?.sprites.other.home.front_default;
        return (
          <CapturedPokemon
            index={index}
            backgroundColor="#00D68F"
            backgroundImg={imgName}
            borderColor="#004A45"
            key={index}
            onclick={(event: any) => {
              openPokemon(event, pokemon);
            }}
          ></CapturedPokemon>
        );
      })}
      <CapturedPokemon
        backgroundColor="#FF3D71"
        borderColor="#DB2C66"
        onclick={addNewPokemon}
      >
        <img src={plus} alt="add"></img>
      </CapturedPokemon>
    </ComponentWraper>
  );
};

export default Sidebar;
