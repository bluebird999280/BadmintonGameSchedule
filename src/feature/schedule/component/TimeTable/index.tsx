import {
  Wrapper,
  Container,
  TimeLine,
  RepresentativeTime,
  GameListByTime,
  GameRowHead,
  GameRow,
} from "./style"

function TimeTable(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <TimeLine>
          <RepresentativeTime>
            <span>09:00</span>
            <span>+</span>
          </RepresentativeTime>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="court">코트 번호(코트 순서)</div>
              <div className="type">남자/여자/혼복</div>
              <div className="name">선수 이름</div>
            </GameRowHead>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
          </GameListByTime>
        </TimeLine>
        <TimeLine>
          <RepresentativeTime>
            <span>10:00</span>
            <span>+</span>
          </RepresentativeTime>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="court">코트 번호(코트 순서)</div>
              <div className="type">남자/여자/혼복</div>
              <div className="name">선수 이름</div>
            </GameRowHead>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
          </GameListByTime>
        </TimeLine>
        <TimeLine>
          <RepresentativeTime>
            <span>11:00</span>
            <span>+</span>
          </RepresentativeTime>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="court">코트 번호(코트 순서)</div>
              <div className="type">남자/여자/혼복</div>
              <div className="name">선수 이름</div>
            </GameRowHead>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
          </GameListByTime>
        </TimeLine>
        <TimeLine>
          <RepresentativeTime>
            <span>12:00</span>
            <span>+</span>
          </RepresentativeTime>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="court">코트 번호(코트 순서)</div>
              <div className="type">남자/여자/혼복</div>
              <div className="name">선수 이름</div>
            </GameRowHead>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
            <GameRow>
              <div className="time">09:00</div>
              <div className="court">코트 1(1번)</div>
              <div className="type">혼복</div>
              <div className="name">조수민/이재성 vs 김동규/관향애</div>
            </GameRow>
          </GameListByTime>
        </TimeLine>
      </Container>
    </Wrapper>
  )
}

export default TimeTable
