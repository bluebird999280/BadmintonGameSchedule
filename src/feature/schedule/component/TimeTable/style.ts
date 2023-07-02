import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
`
export const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
`

export const TimeLine = styled.div`
  display: flex;
  flex: 1 0 auto;
`

export const GameListByTime = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 15%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`
export const GameRow = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-basis: 0;
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
  }
  .time {
    max-width: 80px;
    flex: 0 1 auto;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .time-court {
    max-width: 160px;
    flex: 0 1 auto;
    display: none;
    @media screen and (max-width: 500px) {
      width: 30%;
      white-space: nowrap;
      display: flex;
    }
  }

  .court {
    max-width: 200px;
    flex: 0 1 auto;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .type {
    max-width: 80px;
    flex: 0 1 auto;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .club {
    max-width: 200px;
    flex: 0 1 auto;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .name {
    max-width: 320px;
    flex: 0 1 auto;
    white-space: nowrap;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      width: 80%;
    }
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
