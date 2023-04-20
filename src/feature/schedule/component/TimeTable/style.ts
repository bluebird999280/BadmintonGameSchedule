import styled from "styled-components"

export const Wrapper = styled.div`
  display: inline-block;
  max-width: 1000px;
`
export const Container = styled.div``

export const TimeLine = styled.div``

export const GameListByTime = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 15%);
  overflow: hidden;
  display: inline-block;
`
export const GameRow = styled.div`
  display: flex;
  color: #212529;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  border-bottom: 4px solid #f8f9fd;
  background-color: white;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex: 1 0 auto;
  }
  .time {
    width: 10%;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .time-court {
    width: 10%;
    display: none;
    @media screen and (max-width: 500px) {
      display: flex;
    }
  }

  .court {
    width: 20%;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .type {
    width: 10%;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .club {
    width: 30%;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .name {
    width: 30%;
    background-color: rgb(248, 248, 248);
  }
`

export const GameRowHead = styled(GameRow)`
  font-weight: bold;
  background-color: black;
  & > div {
    color: white;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
`
