import styled from "styled-components";

export interface Props {
    botton: any
}

export const ButtonComponent = styled.button`
    background : #FF3D71;
    padding: 16px 24px;
    color: #fff;
    border-radius: 30px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    box-shadow: 0px 13px 19px -3px #7f8488;
    font-family: 'Open Sans', sans-serif;
    position: fixed;
    bottom: ${(props: any) => props.botton || '20px' };
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    z-index: 9000;
    cursor: pointer;
`
