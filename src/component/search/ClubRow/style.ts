import styled, { css } from "styled-components"
import { IWrapperProps } from "./type"

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  cursor: pointer;
  margin: 10px 10px 15px 10px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0.5px 5px 0.5px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.25);
  }

  ${(props) => props.selected && css``}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  text-align: left;
  padding: 10px 0px;
  & .title {
    color: #333;
    font-size: 16px;
    margin-bottom: 6px;
    font-weight: 500;
  }
`
