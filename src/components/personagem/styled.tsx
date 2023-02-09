import styled from "styled-components";

export const ComponentAsh = styled.img`
    position: relative;
    /* display: inline-block; */
    z-index: 2;

    &:hover + .Ballon{
        visibility: visible;
        z-index: 1;
        animation: ballon 1s ease-in;
    }
`
export const ComponentBallon = styled.img`
    visibility: hidden;
    z-index: 0;
    position: absolute;
    top: 44%;

    @keyframes ballon {
        0% {transform: translateY(0%); visibility: hidden}
        100% {transform: translateY(-60%); visibility: visible}
    }
`