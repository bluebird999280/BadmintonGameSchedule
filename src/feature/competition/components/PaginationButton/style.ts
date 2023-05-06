import styled from "styled-components"

export const Wrapper = styled.div`
  width: 30px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgb(233, 236, 239);
  border-radius: 3px;
  &:nth-of-type(2n-1) {
    background-color: #fff;
  }

  &:nth-of-type(2n) {
    background-color: #f8f8f8;
  }
`
