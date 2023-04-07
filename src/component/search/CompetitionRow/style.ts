import styled, { css } from "styled-components"
import {
  IProgressBackgroundColor,
  IWrapperProps,
  IProgressWrapper,
} from "./type"

const progressBackgroundColor: IProgressBackgroundColor = {
  schedule: [244, 40, 50],
  progress: [61, 150, 242],
  completion: [102, 102, 102],
}

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

  ${(props) =>
    props.selected &&
    css`
     background-color : rgba(${progressBackgroundColor[props.type].join(
       ","
     )}, 0.18);};
    `}
`
export const ProgressWrapper = styled.div<IProgressWrapper>`
  color: white;
  opacity: 0.7;
  font-weight: 600;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 25px 30px 25px 20px;
  border-radius: 0 30px 30px 0;
  background-color: ${(props) =>
    `rgb(${progressBackgroundColor[props.type].join(",")});`};
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
  & .date {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }
`
