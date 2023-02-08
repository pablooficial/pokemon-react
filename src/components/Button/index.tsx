import { Children } from "react";
import { ButtonComponent } from "./styled";

type Props = {
    children: JSX.Element | JSX.Element[] | string;
    onclick: any;
    id: any;
    desabilitar:boolean,
    botton: any
}

const Button = ({children, onclick, id, desabilitar, botton}: Props) => {
    return (
        <ButtonComponent onClick={onclick} id={id} botton={botton} disabled={desabilitar}>
            {children}
        </ButtonComponent>
    )
}

export default Button;