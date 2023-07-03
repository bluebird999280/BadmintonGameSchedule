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
    flex: 1 1 auto;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .time-court {
    max-width: 160px;
    flex: 1 1 auto;
    display: none;
    @media screen and (max-width: 500px) {
      width: 30%;
      white-space: nowrap;
      display: flex;
    }
  }

  .court {
    width: 200px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .type {
    width: 100px;
    background-color: rgb(248, 248, 248);
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .club {
    width: 200px;
    flex-direction: column;
    & > div {
      width: 100%;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .name {
    min-width: 180px;
    flex-direction: column;
    flex: 1 1 auto;
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
