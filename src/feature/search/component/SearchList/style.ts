import styled from "styled-components"
import { IProgressBackgroundColor, IProgressWrapper } from "./type"

const progressBackgroundColor: IProgressBackgroundColor = {
  schedule: "#f79516",
  progress: "#3d96f2",
  completion: "#666666",
}

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin: 10px 10px 15px 10px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0.5px 5px 0.5px rgba(0, 0, 0, 0.25);
`
export const ProgressWrapper = styled.div<IProgressWrapper>`
  color: white;
  opacity: 0.7;
  font-weight: 600;
  padding: 25px 30px 25px 20px;
  border-radius: 0 30px 30px 0;
  background-color: ${(props) => progressBackgroundColor[props.type]};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
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
