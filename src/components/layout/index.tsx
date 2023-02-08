import Home from "../../pages/home"
import LadingPage from "../../pages/LadinPage";
import TypesPokemon from "../../ultils/typesPokemon";
import CreatPokemonNow from "../createPokemonNow";
import Sidebar from "../sidebar";
import { LayoutComponent } from "./styled"

type Props = {
    children: JSX.Element | JSX.Element[] | string;
}

const Layout = ({children}: Props) => {
   return(
    <>
    <LayoutComponent>
        {children}
    </LayoutComponent>
    </>
   ) 
}

export default Layout;