import styled from "styled-components";

export interface Props {
  color: any,
}

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 40px;
  border: 1px solid #E4E9F2;
  border-radius: 4px;
  cursor: pointer;
`

export const Selected = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #FFF;

  & .selectOptions {
    display: flex;
    flex-direction: initial;
    justify-content: space-between;
    align-items: center;
  }
`

export const Options = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #F7F9FC;
  border: 1px solid #E4E9F2;
  border-radius: 4px;
  z-index: 2;
  
`

export const Option = styled.div`
  padding: 10px;
  display: flex;
  background-color: #F7F9FC;
  box-sizing: border-box; 
  background-color: ${(props: any) => props.color};

  input[type="checkbox"] {
    /* margin-right: 10px;
    width: min-content;
    border: 1px solid #2E3A59; */
    display: none;
  }
  & label{
    color: #2E3A59;
    z-index: 9999;
  }
  & .itemSelect{
    display: flex;
    /* flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px; */
    align-items: center;
    box-sizing: border-box;
  }
` 