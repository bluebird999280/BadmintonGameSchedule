import {
  Wrapper,
  Container,
  TimeLine,
  GameListByTime,
  GameRowHead,
  GameRow,
} from "./style"
import { ITimeTableProps } from "./type"
import { forwardRef, ForwardedRef } from "react"

const TimeTable = forwardRef(function TimeTable(
  { list }: ITimeTableProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  console.log(list)
  return (
    <Wrapper ref={forwardedRef}>
      <Container>
        <TimeLine>
          <GameListByTime>
            <GameRowHead className="head">
              <div className="time">시간</div>
              <div className="time-court">
                시간 <br /> (코트-경기)
              </div>
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
                    <div>{l.T1CLUB}</div>
                    <div>{l.T2CLUB}</div>
                  </div>
                  <div className="name">
                    <div>{l.T1_PLAYER.replace("/", ",")}</div>
                    <div>{l.T2_PLAYER.replace("/", ",")}</div>
                  </div>
                </GameRow>
              </>
            ))}
          </GameListByTime>
        </TimeLine>
      </Container>
    </Wrapper>
  )
})

export default TimeTable
