import { ComponentCaptured } from "./styled";

type Props = {
    children?: JSX.Element | JSX.Element[] | string;
    onclick?: any;
    backgroundColor?: any;
    borderColor?: any;
    index?: any;
    backgroundImg?:any;
}

const CapturedPokemon = ({children, onclick, backgroundColor, borderColor, index, backgroundImg}: Props) => {
    return(
        <ComponentCaptured color={backgroundColor} data-index={index} backgroundimg={backgroundImg}  border={borderColor} onClick={onclick}>
            {children}
        </ComponentCaptured>
    )
}

export default CapturedPokemon;