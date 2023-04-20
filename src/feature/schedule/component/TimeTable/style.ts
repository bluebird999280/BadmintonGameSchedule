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
    padding: 20px;
  }

  .time {
    min-width: 100px;
    background-color: rgb(248, 248, 248);
  }

  .court {
    min-width: 200px;
  }

  .type {
    min-width: 100px;
    background-color: rgb(248, 248, 248);
  }

  .club {
    min-width: 300px;
  }

  .name {
    min-width: 300px;
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
