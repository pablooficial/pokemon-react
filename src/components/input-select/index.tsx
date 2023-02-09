import { useEffect, useState } from "react";
import styled from "styled-components";
import { typeColorMap } from "../../ultils/typesPokemon";
import { Options, Selected, Wrapper, Option } from "./styled";
import arrowDown from "../../assets/images/chevronDownBlack.png";

type Props = {
  setSelected: any;
  selected: any;
};

const InputSelect = ({ selected, setSelected }: Props) => {
  const [option, setOption] = useState([{}]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOption(typeColorMap);
  }, []);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleSelection = (e: any, type: any) => {
    if (selected?.includes(type)) {
      setSelected(
        selected.filter((selectedType: any) => selectedType !== type)
      );
    } else {
      if (selected.length >= 2) {
        return;
      }
      setSelected([...selected, type]);
    }

  };

  return (
    <Wrapper onClick={toggleOpen}>
      <Selected>
        {selected.length ? (
          selected.map((selectedType: any) => selectedType).join(", ")
        ) : (
          <div className="selectOptions">
            Selecione o(s) tipo(s)
            <img src={arrowDown} alt="arrow down" />
          </div>
        )}
      </Selected>
      {open && (
        <Options>
          {option.map((item: any) => (
            <Option key={item.type} color={item.color} onClick={(e) => handleSelection(e, item.type)}>
              <div className="itemSelect">
                <label
                  htmlFor={item.type}
                >
                  {item.type}
                </label>
                <input
                  type="checkbox"
                  onChange={(e) => handleSelection(e, item.type)}
                  checked={selected.includes(item?.type)}
                  id={item.type}
                  name={item.type}
                />
              </div>
            </Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default InputSelect;
