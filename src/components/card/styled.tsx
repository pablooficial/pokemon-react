import styled from "styled-components";

export interface Props {
    color: any,
}

export const ComponentWraper = styled.div`
    background-image: linear-gradient(to right, #43E97B , #38F9D7);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Open Sans', sans-serif;
    display: none;
    overflow-y: scroll;
    z-index: 8000;
    border-radius: 8px;
    

    &.open {
        display: block;
    }

    @media (min-width: 768px){
        max-width: 360px;
        max-height: 80vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
export const ComponentClosed = styled.button`
    width: 38px;
    height: 38px;
    position: sticky;
    float: right;
    top: 12px;
    right: 12px;
    border-radius: 50%;
    border:2px solid #8F9BB3;
    background-color: #F7F9FC;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;

    & img {
        width: 19px;
        height: 19px;
        padding: 9.5px;
    }
`

export const ComponentWraperItens = styled.div`
    width: 100%;
    background-color: #F7F9FC;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 153px;
    border-radius: 24px 24px 0px 0px;
    border: none;
    padding-top: 170px;
    padding: 170px 24px 0;
    box-sizing: border-box;
    padding-bottom: 140px;

    .wraper {
        padding: 0 24px;
    }

    @media (min-width: 768px){
        padding-bottom: 0px;
    }
`

export const ComponentWraperImg = styled.div`
    border-radius: 50%;
    border: 4px solid #00D68F;
    background-color: #F7F9FC;
    top: -123.5px;
    position: absolute;
    overflow: hidden;
`
export const ComponentImgPokemon = styled.img`
    height: 247px;
    width: 247px;
`

export const ComponentTitle = styled.h1`
    text-align: center;
    color: #2E3A59;
    width: max-content;

    & img {
        padding-left: 1rem;
    }
`

export const ComponentEditTitle = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.4rem;

    & input {
        padding: 0 16px;
        height: 43px;
    }
`

export const ComponentWraperButton = styled.div`
    display: flex;
    gap: 0.4rem;

    & button {
        /* padding: 18px 16px; */
        height: 47px;
        width: 47px;

        & .confirm{
            height: 12px;
            width: 16px;
        }

        & .close {
            height: 12px;
            width: 12px;
        }
    }
`

export const ComponentWraperAtributs = styled.div`
    display: flex;
    justify-content: space-around;
    /* gap: 1rem; */
    margin-top: 24px;
`

export const ComponentAtributs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* padding: 0 10px; */
    color: #2E3A59;
    width: 113px;

    &.mid{
        border-left: 1px solid #C5CEE0;
        border-right: 1px solid #C5CEE0;
    }

    & h2{
        font-size: 12px;
        margin: 0;
        color: #2E3A59;
    }

    & p{
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        margin: 8px;
    }
`
export const ComponentWraperType = styled.div`
    display: flex;
    margin: 42px 0px 0;
    width: 100%;
    position: relative;
    border-top: 1px solid #C5CEE0;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
`
export const ComponentTitleFloating = styled.h2`
    position: absolute;
    top: -20px;
    margin: 0;
    background-color: #F7F9FC;
    padding: 6px 12px;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    color: #2E3A59;
`

export const ComponentType = styled.div`
    border-radius: 30px;
    padding: 8px 16px;
    background-color: ${(props: any) => props.color};
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    min-width: 67px;
    text-align: center;
`
export const ComponentWraperAbilits = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin: 30px 10px; */
    width: 100%;
    position: relative;
    border-top: 1px solid #C5CEE0;
    padding: 50px 0;

    & p{
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
        color: #2E3A59;
    }

    &.end{
        padding: 50px 0 65px;
    }
`
export const ComponentPokeball = styled.img`
    position: absolute;
    margin: auto;
    filter: drop-shadow(0px 11px 12px #7F8488);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    z-index: 9000;
    bottom: 65px;
  
`
export const ComponentWraperStatistics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & p {
        margin: 8px 0;
    }
    
    & div{
        display: flex;
        align-items: baseline;
        gap: 0.5rem;

        & p {
            margin: 0;
        }
    }
`

