import { useEffect, useState, useMemo, useRef, useCallback } from "react"
import TimeTable from "./component/TimeTable"
import DateSelection from "./component/DateSelection"
import DownloadSchedule from "component/schedule/DownloadSchedule"
import { Wrapper, Container } from "./style"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { CheckTableType } from "./type"
import dti from "dom-to-image"
import { saveAs } from "file-saver"
import parseDate from "util/func/parseDate"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { tournamentId, selectedClubList, gameList } = useAppSelector(
    (state) => ({
      tournamentId: state.schedule.competition?.TOURNAMENT_ID,
      selectedClubList: state.search.clubList.filter((club) => club.selected),
      gameList: state.schedule.gameList,
    })
  )

  // useRef
  const downloadRef = useRef<HTMLDivElement | null>(null)

  // useState
  const [currentSelectedDate, setCurrentSelectedDate] = useState("")

  // useCallback
  const onClickDownloadButton = useCallback(async () => {
    if (downloadRef.current !== null) {
      const blob = await dti.toBlob(downloadRef.current)
      saveAs(blob, parseDate(currentSelectedDate) + ".png")
    }
  }, [currentSelectedDate])

  // useMemo
  const checkTable = useMemo(() => {
    const temp: CheckTableType = {}
    selectedClubList.map((selectedClub) => {
      selectedClub.teamList.map((team) => {
        if (team.selected) {
          if (temp[team.EVENT_ID] === undefined)
            temp[team.EVENT_ID] = { [team.ENTRY_ID]: true }
          else temp[team.EVENT_ID][team.ENTRY_ID] = true
        }
      })
    })
    return temp
  }, [selectedClubList])

  const gameListBySelectedTeamListAndDate = useMemo(
    () =>
      gameList?.data_list.filter(
        (data) =>
          data.PLAN_DATE === currentSelectedDate &&
          checkTable[data.EVENT_ID] !== undefined &&
          (checkTable[data.EVENT_ID][data.TEAM1_ENTRY_ID] === true ||
            checkTable[data.EVENT_ID][data.TEAM2_ENTRY_ID] === true)
      ),
    [checkTable, gameList, currentSelectedDate]
  )

  useEffect(() => {
    if (tournamentId !== undefined)
      dispatch(
        getAllGameList({
          tournamentId,
          planDate: "",
        })
      )
  }, [dispatch, tournamentId])

  if (gameList === undefined) return <></>
  return (
    <Wrapper>
      <Container ref={downloadRef}>
        <div className="top">
          <DateSelection
            currentSelectedDate={currentSelectedDate}
            setCurrentSelectedDate={setCurrentSelectedDate}
            planDateList={gameList.planDateList}
          />
          <DownloadSchedule onClick={onClickDownloadButton} />
        </div>

        <TimeTable list={gameListBySelectedTeamListAndDate}></TimeTable>
      </Container>
    </Wrapper>
  )
}

export default Schedule
