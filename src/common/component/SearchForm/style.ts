import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`
export const Container = styled.form`
  display: flex;
`
export const StyledInputWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 64px;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-grow: 0;
  white-space: nowrap;
  border: none;
  outline: none;
`
export const SearchImageWrapper = styled.button`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  margin-left: 10px;
  & > img {
    opacity: 0.5;
  }
`
