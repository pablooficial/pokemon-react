import styled from "styled-components";

export interface Props {
    color: any,
    border: any,
    backgroundimg: any,
}

export const ComponentCaptured = styled.div`
    border-radius: 50%;
    border: 4px solid ${(props: any) => props.border || '#004A45' };
    background-color: ${(props: any) => props.color || '#00D68F' };
    background-image: url(${(props: any) => props.backgroundimg || '?' });
    background-size: cover;
    background-repeat: no-repeat;
    height: 53px;
    width: 53px;
    margin: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`