import { useEffect, useState, useMemo, useRef, useCallback } from "react"
import TimeTable from "./component/TimeTable"
import DateSelection from "./component/DateSelection"
import DownloadSchedule from "component/schedule/DownloadSchedule"
import { Wrapper, Container } from "./style"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"
import dti from "dom-to-image"
import { saveAs } from "file-saver"
import parseDate from "util/func/parseDate"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { tournamentId, gameList, hashTableForSelectedTeam } = useAppSelector(
    (state) => ({
      tournamentId: state.competition.competition?.TOURNAMENT_ID,
      gameList: state.schedule.gameList,
      hashTableForSelectedTeam: state.club.hashTableForSelectedTeam,
    })
  )

  // useRef
  const downloadRef = useRef<HTMLDivElement | null>(null)

  // useState
  const [currentSelectedDate, setCurrentSelectedDate] = useState(
    gameList?.planDateList[0] && ""
  )

  // useMemo
  const gameListBySelectedTeamListAndDate = useMemo(() => {
    return gameList?.data_list.filter(
      (data) =>
        data.PLAN_DATE === currentSelectedDate &&
        hashTableForSelectedTeam[data.EVENT_ID] !== undefined &&
        (hashTableForSelectedTeam[data.EVENT_ID][data.TEAM1_ENTRY_ID] ||
          hashTableForSelectedTeam[data.EVENT_ID][data.TEAM2_ENTRY_ID])
    )
  }, [gameList, hashTableForSelectedTeam, currentSelectedDate])

  // useCallback
  const onClickDownloadButton = useCallback(async () => {
    if (downloadRef.current !== null) {
      const blob = await dti.toBlob(downloadRef.current)
      saveAs(blob, parseDate(currentSelectedDate) + ".png")
    }
  }, [currentSelectedDate])

  // useEffect
  useEffect(() => {
    if (tournamentId !== undefined)
      dispatch(
        getAllGameList({
          tournamentId,
          planDate: "",
        })
      )
  }, [dispatch, tournamentId])

  useEffect(() => {
    setCurrentSelectedDate(gameList?.planDateList[0].PLAN_DATE ?? "")
  }, [gameList])

  if (gameList === undefined) return <></>
  return (
    <Wrapper>
      <Container>
        <div className="top">
          <DateSelection
            currentSelectedDate={currentSelectedDate}
            setCurrentSelectedDate={setCurrentSelectedDate}
            planDateList={gameList.planDateList}
          />
          <DownloadSchedule onClick={onClickDownloadButton} />
        </div>
        <TimeTable list={gameListBySelectedTeamListAndDate} ref={downloadRef} />
      </Container>
    </Wrapper>
  )
}

export default Schedule
