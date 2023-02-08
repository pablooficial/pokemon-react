import styled from "styled-components";

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
export const ComponentCloseModal = styled.button`
    width: 38px;
    height: 38px;
    position: fixed;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 160px;
    border-radius: 24px 24px 0px 0px;
    border: none;
    padding-top: 170px;
    box-sizing: border-box;

    &.wrapper {
        padding: 160px 24px 200px;
    }

    @media (min-width: 768px){
        &.wrapper {
        padding: 160px 24px 80px;
    }
    }
`
export const ComponentWraperImg = styled.div`
    border-radius: 50%;
    border: 4px solid #00D68F;
    background-color: #F7F9FC;
    top: -123.5px;
    position: absolute;
    overflow: hidden;
    padding: 80px 83px;
`
export const ComponentImgPokemon = styled.img`
    height: 74px;
    width: 82px;
    transform: translateX(8px);
`
export const ComponentAddInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 12px 0;

    & label {
        color: #2E3A59;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        margin: 6px 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    & input {
        width: 100%;
        padding: 12px 8px;
        /* margin: 6px; */
        color: #2E3A59;
        border: 1px solid #E4E9F2;
        box-sizing: border-box;
    }

    &.skill {
        width: 100%;
    }
`

export const ComponentWraperType = styled.div`
    display: flex;
    margin: 42px 0px 0;
    width: 100%;
    position: relative;
    border-top: 1px solid #C5CEE0;
    justify-content: center;
    /* gap: 1rem; */
    padding: 50px 0;

    & select {
        width: 100%;
        padding: 12px 8px;
        /* margin: 6px; */
        color: #2E3A59;
        border: 1px solid #E4E9F2;
    }

    & div{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.4rem;

        & input{
            width: 100%;
            padding: 12px 8px;
            border: 2px solid #E4E9F2;
            color: #2E3A59;
            box-sizing: border-box;
            
            & ::placeholder {
            color: #E4E9F2;
            }
        }
    }

    &.lastItem{
        padding: 50px 0 0px;
    }
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
// `
// export const TestFooter = styled.div`
//         position: fixed;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         bottom: 0;
// `