import styled from "styled-components";
import mapa from "../../assets/images/pageBackground.png"

export const ComponentWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${mapa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`