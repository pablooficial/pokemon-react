import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { getApi } from "../../API/API";
import Card from "../../components/card";
import CreatPokemonNow from "../../components/createPokemonNow";
import Layout from "../../components/layout";
import Personagem from "../../components/personagem";
import Sidebar from "../../components/sidebar";
import store from "../../store";
import { ComponentWrapper } from "./styled";


const Home = () => {
    const [search, setSearch] = useState(['']);
    const [data, setData] = useState<pokemon | null>(null);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getApi()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    const searchPokemon = (open: boolean) => {
        setShow(open)
    }

    return (
        <Provider store={store}>
            <Layout>
                <ComponentWrapper className="paddingContainer">
                    <Personagem onclick={searchPokemon}></Personagem>
                    <Sidebar onclick={searchPokemon}></Sidebar>
                </ComponentWrapper>
                <Card onclick={searchPokemon}>ss</Card>
                <CreatPokemonNow></CreatPokemonNow>
            </Layout>
        </Provider>
    )
}

export default Home;