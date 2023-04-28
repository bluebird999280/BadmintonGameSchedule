import styled from "styled-components"

export const Wrapper = styled.div``
export const Container = styled.div`
  .ant-collapse-header {
    background-color: rgba(0, 0, 0, 0.02) !important;
  }
  .ant-collapse-header-text {
    font-size: 15px;
    font-weight: 500;
  }
`
export const Manual = styled.div`
  font-size: 15px;
  strong {
    color: rgba(0, 0, 0, 0.8);
  }
`
export const DevelopCycle = styled.div`
  margin-top: 30px;
  margin-bottom: -20px;
`

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .text {
    p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  .icons {
    height: 70px;
    display: flex;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      padding: 0 5px;
    }
  }
`
