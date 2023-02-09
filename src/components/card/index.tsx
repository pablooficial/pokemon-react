import {
  ComponentImgPokemon,
  ComponentWraper,
  ComponentWraperImg,
  ComponentTitle,
  ComponentWraperAtributs,
  ComponentAtributs,
  ComponentType,
  ComponentWraperType,
  ComponentTitleFloating,
  ComponentWraperAbilits,
  ComponentWraperItens,
  ComponentPokeball,
  ComponentWraperStatistics,
  ComponentEditTitle,
  ComponentWraperButton,
  ComponentClosed,
} from "./styled";
import pokebola from "../../assets/images/pokeball.png";
import escudo from "../../assets/images/shield.png";
import espada from "../../assets/images/sword.png";
import velocimetro from "../../assets/images/speed.png";
import editar from "../../assets/images/editIcon.png";
import confirme from "../../assets/images/checkIcon.png";
import cancelar from "../../assets/images/close.png";
import { useDispatch, useSelector } from "react-redux";
import {
  alterName,
  getLocalStorage,
  removerLocalStorage,
  verifyLocalStorage,
} from "../../ultils/localStorage";
import Button from "../Button";
import { useEffect, useState } from "react";
import store from "../../store";
import TypesPokemon from "../../ultils/typesPokemon";

type Props = {
  onclick: (event: React.MouseEvent<HTMLElement>) => void;
};

const Card = ({ onclick }: Props) => {
  let pokemonEdit = useSelector((state: any) => state.pokemonEdit);
  let pokemon = useSelector((state: any) => state.pokemon);
  const modal = useSelector((state: any) => state.modal);
  const [showEdit, setShowEdit] = useState(false);
  const [namePokemon, SetNamePokemon] = useState(pokemon?.data?.name);
  const [editedPokemon, setEditedPokemon] = useState(false);
  const [dadosPokemon, setDadosPokemon] = useState({});

  const dispatch = useDispatch();

  const editPokemon = () => {
    setShowEdit(!showEdit);
  };

  const confirmEdit = () => {
    alterName(namePokemon, modal.index);
    setShowEdit(!showEdit);
    setEditedPokemon(true);
    const team = getLocalStorage();

    dispatch({
      type: "SET_POKEMON_EDIT",
      payload: {
        data: team,
      },
    });
    closeModal();
  };

  const closedEdit = () => {
    setShowEdit(!showEdit);
  };

  const captur = async () => {
    await verifyLocalStorage(pokemon, false, false);
    const team = getLocalStorage();
    dispatch({
      type: "SET_POKEMON_EDIT",
      payload: {
        data: team,
      },
    });
    closeModal();
  };

  const closeModal = () => {
    dispatch({
      type: "SET_MODAL",
      payload: {
        open: false,
      },
    });
  };

  const remover = () => {
    removerLocalStorage(modal.index);
    const team = getLocalStorage();
    dispatch({
      type: "SET_POKEMON_EDIT",
      payload: {
        data: team,
      },
    });
    closeModal();
  };

  useEffect(() => {
    if (modal.index && modal.open) {
      setDadosPokemon(pokemonEdit.data[modal.index]);
    } else if (modal.open) {
      setDadosPokemon(pokemon);
    }
  }, [modal]);

  return (
    <>
      <ComponentWraper className={modal.open ? "open" : ""}>
        <ComponentClosed onClick={closeModal}>
          <img src={cancelar} alt="closed"></img>
        </ComponentClosed>
        <ComponentWraperItens>
          <ComponentWraperImg>
            <ComponentImgPokemon
              src={dadosPokemon?.data?.sprites?.other?.home?.front_default}
            ></ComponentImgPokemon>
          </ComponentWraperImg>
          {showEdit ? (
            <ComponentEditTitle>
              <input
                placeholder={dadosPokemon?.data?.name}
                onChange={(e: any) => SetNamePokemon(e.target.value)}
              />
              <ComponentWraperButton>
                <button>
                  <img
                    src={confirme}
                    alt="confirm"
                    className="confirm"
                    onClick={confirmEdit}
                  />
                </button>
                <button>
                  <img
                    src={cancelar}
                    alt="cancel"
                    className="close"
                    onClick={closedEdit}
                  />
                </button>
              </ComponentWraperButton>
            </ComponentEditTitle>
          ) : (
            <>
              {editedPokemon ? (
                <ComponentTitle>
                  {namePokemon}
                  <img src={editar} alt="editar" onClick={editPokemon}></img>
                </ComponentTitle>
              ) : (
                <ComponentTitle>
                  {dadosPokemon?.data?.name}
                  <img src={editar} alt="editar" onClick={editPokemon}></img>
                </ComponentTitle>
              )}
            </>
          )}
          <ComponentWraperAtributs>
            <ComponentAtributs>
              <h2>HP</h2>
              <p>
                {dadosPokemon?.data?.stats
                  ? dadosPokemon?.data?.stats[0]?.base_stat
                  : ""}
              </p>
            </ComponentAtributs>
            <ComponentAtributs className="mid">
              <h2>Altura</h2>
              <p>{dadosPokemon?.data?.height} m</p>
            </ComponentAtributs>
            <ComponentAtributs>
              <h2>peso</h2>
              <p>{dadosPokemon?.data?.weight} Kg</p>
            </ComponentAtributs>
          </ComponentWraperAtributs>

          <ComponentWraperType>
            <ComponentTitleFloating>Tipo</ComponentTitleFloating>
            {dadosPokemon?.data?.types?.map((type: any, index: number) => {
              const colorType = TypesPokemon(type.type.name);
              return (
                <ComponentType key={index} color={colorType?.color}>
                  {type.type.name}
                </ComponentType>
              );
            })}
          </ComponentWraperType>

          <ComponentWraperAbilits className="end">
            <ComponentTitleFloating>Habilidades</ComponentTitleFloating>
            <p>
              {dadosPokemon?.data?.abilities
                ? dadosPokemon?.data?.abilities[0]?.ability.name
                : ""}
              ,{" "}
              {dadosPokemon?.data?.abilities
                ? dadosPokemon?.data?.abilities[1]?.ability.name
                : ""}
            </p>
          </ComponentWraperAbilits>

          {modal?.edit ? (
            <ComponentWraperAbilits className="end">
              <ComponentTitleFloating>Estatísticas</ComponentTitleFloating>
              <ComponentWraperStatistics>
                <div>
                  <img src={escudo} alt="escudo"></img>
                  <p>defesa</p>
                </div>
                <p>{dadosPokemon?.data.stats?.[2]?.base_stat}</p>
              </ComponentWraperStatistics>

              <ComponentWraperStatistics>
                <div>
                  <img src={espada} alt="espada"></img>
                  <p>ataque</p>
                </div>
                <p>{dadosPokemon?.data.stats?.[1]?.base_stat}</p>
              </ComponentWraperStatistics>

              <ComponentWraperStatistics>
                <div>
                  <img src={escudo} alt="escudo"></img>
                  <p>defesa especial</p>
                </div>
                <p>{dadosPokemon?.data.stats?.[2]?.base_stat}</p>
              </ComponentWraperStatistics>

              <ComponentWraperStatistics>
                <div>
                  <img src={espada} alt="espada"></img>
                  <p>ataque especial</p>
                </div>
                <p>{dadosPokemon?.data.stats?.[3]?.base_stat}</p>
              </ComponentWraperStatistics>

              <ComponentWraperStatistics>
                <div>
                  <img src={velocimetro} alt="velocidade"></img>
                  <p>velocidade</p>
                </div>
                <p>{dadosPokemon?.data.stats?.[4]?.base_stat}</p>
              </ComponentWraperStatistics>
            </ComponentWraperAbilits>
          ) : (
            ""
          )}
        </ComponentWraperItens>

        <div>
          <></>
        </div>
      </ComponentWraper>

      {modal?.open ? (
        <>
          {modal?.edit ? (
            <Button botton="83px" onclick={remover}>
              LIBERAR POKEMON
            </Button>
          ) : (
            <ComponentPokeball src={pokebola} alt="pokeball" onClick={captur} />
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
