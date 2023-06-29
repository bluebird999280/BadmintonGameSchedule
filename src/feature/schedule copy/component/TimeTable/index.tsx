import {
  Wrapper,
  Container,
  TimeLine,
  GameListByTime,
  GameRowHead,
  GameRow,
} from "./style"
import { ITimeTableProps } from "./type"

const TimeTable = ({ list }: ITimeTableProps) => {
  return (
    <Wrapper>
      <Container>
        <TimeLine>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="time-court">시간 (코트번호-경기번호)</div>
              <div className="court">코트 번호(코트 순서)</div>
              <div className="type">타입</div>
              <div className="club">클럽</div>
              <div className="name">선수 이름</div>
            </GameRowHead>
            {list?.map((l) => (
              <>
                <GameRow key={`${l.EVENT_ID}-${l.ENTRY_ID}`}>
                  <div className="time">{l.START_TIME}</div>
                  <div className="time-court">
                    {l.START_TIME}
                    <br />({l.COURT_NO}-{l.COURT_SORT})
                  </div>
                  <div className="court">
                    코트 {l.COURT_NO}번({l.COURT_SORT}경기)
                  </div>
                  <div className="type">{l.EVENT_NM.split("-")[0]}</div>
                  <div className="club">
                    {l.T1CLUB} vs {l.T2CLUB}
                  </div>
                  <div className="name">
                    {l.T1_PLAYER.replace("/", ",")} vs{" "}
                    {l.T2_PLAYER.replace("/", ",")}
                  </div>
                </GameRow>
              </>
            ))}
          </GameListByTime>
        </TimeLine>
      </Container>
    </Wrapper>
  )
}

export default TimeTable
