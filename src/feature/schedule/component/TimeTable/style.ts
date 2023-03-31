import styled from "styled-components"

export const Wrapper = styled.div`
  display: inline-block;
  max-width: 1000px;
`
export const Container = styled.div``

export const TimeLine = styled.div``

export const RepresentativeTime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 5px;
  font-size: 18px;
  border-bottom: 1px solid #f4f2f1;
`

export const GameListByTime = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 15%);
  overflow: hidden;
`
export const GameRow = styled.div`
  padding: 23px;
  display: flex;
  color: #212529;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  border-bottom: 4px solid #f8f9fd;

  .time {
    min-width: 100px;
  }

  .court {
    min-width: 200px;
  }

  .type {
    min-width: 200px;
  }

  .name {
    min-width: 400px;
  }
`

export const GameRowHead = styled(GameRow)`
  font-weight: bold;
  padding: 18px 25px;
`
