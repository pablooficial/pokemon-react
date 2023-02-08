import {
  ComponentAddInfo,
  ComponentCloseModal,
  ComponentImgPokemon,
  ComponentTitleFloating,
  ComponentWraper,
  ComponentWraperImg,
  ComponentWraperItens,
  ComponentWraperType,
  TestFooter,
} from "./styled";
import camera from "../../assets/images/addImage.png";
import escudo from "../../assets/images/shield.png";
import espada from "../../assets/images/sword.png";
import velocimetro from "../../assets/images/speed.png";
import cancelar from "../../assets/images/close.png";
import Button from "../Button";
import { useEffect, useState } from "react";
import { getLocalStorage, verifyLocalStorage } from "../../ultils/localStorage";
import InputSelect from "../input-select";
import { useDispatch, useSelector } from "react-redux";

const CreatPokemonNow = () => {
  const [name, setName] = useState("");
  const [hp, setHp] = useState<number>();
  const [weight, setWeight] = useState<Number>();
  const [height, setHeight] = useState<Number>();
  const [abilityOne, setAbilityOne] = useState<Number>();
  const [abilityTwo, setAbilityTwo] = useState<Number>();
  const [abilityThree, setAbilityThree] = useState<Number>();
  const [abilityFour, setAbilityFour] = useState<Number>();
  const [defense, setDefense] = useState<Number>();
  const [specialdefense, setSpecialdefense] = useState<Number>();
  const [attack, setAttack] = useState<number>();
  const [specialAttack, setSpecialAttack] = useState<Number>();
  const [speed, setSpeed] = useState<Number>();
  const [type, setType] = useState([]);
  const [btndisable, setBtnDisable] = useState(false);
  const create = useSelector((state: any) => state.create);
  const dispatch = useDispatch();

  const changeName = (e: any) => {
    setName(e.target.value);
  };

  const changeHp = (e: any) => {
    setHp(e.target.value);
  };

  const changeAttack = (e: any) => {
    setAttack(e.target.value);
  };

  const changeWeight = (e: any) => {
    setWeight(e.target.value);
  };

  const changeHeight = (e: any) => {
    setHeight(e.target.value);
  };

  const changeAbilityOne = (e: any) => {
    setAbilityOne(e.target.value);
  };

  const changeAbilityTwo = (e: any) => {
    setAbilityTwo(e.target.value);
  };

  const changeAbilityThree = (e: any) => {
    setAbilityThree(e.target.value);
  };

  const changeAbilityFour = (e: any) => {
    setAbilityFour(e.target.value);
  };

  const changeDefense = (e: any) => {
    setDefense(e.target.value);
  };

  const changeSpecialdefense = (e: any) => {
    setSpecialdefense(e.target.value);
  };

  const changeSpecialAttack = (e: any) => {
    setSpecialAttack(e.target.value);
  };

  const changeSpeed = (e: any) => {
    setSpeed(e.target.value);
  };

  const saveNewPokemon = async () => {
    const constructPokemon = {
      data: {
        name: name,
        wild: false,
        created: true,
        stats: [
          {
            base_stat: hp,
            stat: {
              name: "hp",
            },
          },
          {
            base_stat: attack,
            stat: {
              name: "attack",
            },
          },
          {
            base_stat: defense,
            stat: {
              name: "defense",
            },
          },
          {
            base_stat: specialAttack,
            stat: {
              name: "special-attack",
            },
          },
          {
            base_stat: specialdefense,
            stat: {
              name: "special-defense",
            },
          },
          {
            base_stat: speed,
            stat: {
              name: "speed",
            },
          },
        ],
        height: height,
        weight: weight,
        types: [
          {
            slot: 1,
            type: {
              name: type[0],
            },
          },
          {
            slot: 2,
            type: {
              name: type[1],
            },
          },
        ],
        abilities: [
          {
            ability: {
              name: abilityOne,
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: abilityTwo,
            },
            is_hidden: true,
            slot: 2,
          },
          {
            ability: {
              name: abilityThree,
            },
            is_hidden: true,
            slot: 3,
          },
          {
            ability: {
              name: abilityFour,
            },
            is_hidden: true,
            slot: 4,
          },
        ],
        sprites: {
          other: {
            home: {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/636.png",
            },
          },
        },
      },
    };
    await verifyLocalStorage(constructPokemon, false, false);
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
      type: "SET_CREATE",
      payload: {
        open: false,
      },
    });
  };

  useEffect(() => {
    const inuputsValidators = [
      hp,
      weight,
      height,
      abilityOne,
      abilityTwo,
      abilityThree,
      abilityFour,
      defense,
      defense,
      specialdefense,
      attack,
      specialAttack,
      speed,
      type.length,
    ];
    const validation = setBtnDisable(
      inuputsValidators.some((inputs: any) => !inputs)
    );
  }, [
    hp,
    weight,
    height,
    abilityOne,
    abilityTwo,
    abilityThree,
    abilityFour,
    defense,
    defense,
    specialdefense,
    attack,
    specialAttack,
    speed,
    type,
  ]);

  return (
    <>
      <ComponentWraper className={create.open ? "open" : ""}>
        <ComponentCloseModal onClick={closeModal}>
          <img src={cancelar} alt="closed"></img>
        </ComponentCloseModal>
        <ComponentWraperItens className="wrapper">
          <ComponentWraperImg>
            <ComponentImgPokemon src={camera}></ComponentImgPokemon>
          </ComponentWraperImg>

          <ComponentAddInfo>
            <label htmlFor="nome">NOME</label>
            <input
              type="text"
              id="nome"
              maxLength={255}
              placeholder="Nome"
              onChange={changeName}
            />
          </ComponentAddInfo>

          <ComponentAddInfo>
            <label htmlFor="hp">HP</label>
            <input
              type="number"
              id="hp"
              min={1}
              max={99}
              placeholder="Hp"
              onChange={changeHp}
            />
          </ComponentAddInfo>

          <ComponentAddInfo>
            <label htmlFor="peso">PESO</label>
            <input
              type="number"
              id="peso"
              min={1}
              max={99}
              placeholder="Peso"
              onChange={changeWeight}
            />
          </ComponentAddInfo>

          <ComponentAddInfo>
            <label htmlFor="altura">ALTURA</label>
            <input
              type="number"
              id="altura"
              min={1}
              max={99}
              placeholder="Altura"
              onChange={changeHeight}
            />
          </ComponentAddInfo>

          <ComponentWraperType>
            <ComponentTitleFloating>Tipo</ComponentTitleFloating>
            <InputSelect selected={type} setSelected={setType} />
          </ComponentWraperType>

          <ComponentWraperType className="skill">
            <ComponentTitleFloating>HABILIDADES</ComponentTitleFloating>

            <div>
              <input
                placeholder="habilidade 1"
                min={1}
                max={99}
                onChange={changeAbilityOne}
              ></input>
              <input
                placeholder="habilidade 2"
                min={1}
                max={99}
                onChange={changeAbilityTwo}
              ></input>
              <input
                placeholder="habilidade 3"
                min={1}
                max={99}
                onChange={changeAbilityThree}
              ></input>
              <input
                placeholder="habilidade 4"
                min={1}
                max={99}
                onChange={changeAbilityFour}
              ></input>
            </div>
          </ComponentWraperType>

          <ComponentWraperType className="lastItem">
            <ComponentTitleFloating>ESTATÍSTICAS</ComponentTitleFloating>

            <div>
              <ComponentAddInfo>
                <label htmlFor="defesa">
                  <img src={escudo} alt="defesa"></img>Defesa
                </label>
                <input
                  type="number"
                  id="defesa"
                  min={1}
                  max={99}
                  placeholder="00"
                  className="skill"
                  onChange={changeDefense}
                />
              </ComponentAddInfo>

              <ComponentAddInfo>
                <label htmlFor="ataque">
                  <img src={espada} alt="ataque"></img>Ataque
                </label>
                <input
                  type="number"
                  id="ataque"
                  min={1}
                  max={99}
                  placeholder="00"
                  onChange={changeAttack}
                />
              </ComponentAddInfo>

              <ComponentAddInfo>
                <label htmlFor="defesaEspecial">
                  <img src={escudo} alt="defesaEspecial"></img>Defesa especial
                </label>
                <input
                  type="number"
                  id="defesaEspecial"
                  min={1}
                  max={99}
                  placeholder="00"
                  onChange={changeSpecialdefense}
                />
              </ComponentAddInfo>

              <ComponentAddInfo>
                <label htmlFor="ataqueEspecial">
                  <img src={espada} alt="ataqueEspecial"></img>Ataque especial
                </label>
                <input
                  type="number"
                  id="ataqueEspecial"
                  min={1}
                  max={99}
                  placeholder="00"
                  onChange={changeSpecialAttack}
                />
              </ComponentAddInfo>

              <ComponentAddInfo>
                <label htmlFor="velocidade">
                  <img src={velocimetro} alt="velocidade"></img>Velocidade
                </label>
                <input
                  type="number"
                  id="velocidade"
                  min={1}
                  max={99}
                  placeholder="00"
                  onChange={changeSpeed}
                />
              </ComponentAddInfo>
            </div>
          </ComponentWraperType>
        </ComponentWraperItens>
      </ComponentWraper>
      {create.open ? (
        <Button
          onclick={saveNewPokemon}
          id="btnCreate"
          desabilitar={btndisable}
          botton="12vh"
        >
          Criar Pokemon
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default CreatPokemonNow;
