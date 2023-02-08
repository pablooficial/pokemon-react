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
        from {top: 42%}
        to {top:38%}
    }
`