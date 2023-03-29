import styled from "styled-components"

export const Wrapper = styled.div`
  width: 25px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:nth-of-type(2n-1) {
    background-color: #fff;
  }

  &:nth-of-type(2n) {
    background-color: #f8f8f8;
  }
`
