import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 20px;
  min-width: 788px;
  @media screen and (max-width: 500px) {
    min-width: 500px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .title {
    font-size: 28px;
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 22px;
    }
  }
`
export const MenuWrapper = styled.div``

export const BreadcrumbWrapper = styled.div`
  margin-top: 10px;
  span {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const MobileMenuWrapper = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
  }
`

export const MobileMenuWrap = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
  position: absolute;
  right: 0;

  .title {
    font-size: 30px;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-top: 30px;
  }
  li {
    font-size: 20px;
    margin-bottom: 30px;
    list-style-type: none;
  }
`

export const ExitWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 20px;
`
