import { useEffect, useState, useMemo } from "react"
import TimeTable from "./component/TimeTable"
import DateSelection from "./component/DateSelection"
import { Wrapper, Container } from "./style"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { CheckTableType } from "./type"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { tournamentId, selectedClubList, gameList } = useAppSelector(
    (state) => ({
      tournamentId: state.schedule.competition?.TOURNAMENT_ID,
      selectedClubList: state.search.clubList.filter((club) => club.selected),
      gameList: state.schedule.gameList,
    })
  )

  // useState
  const [currentSelectedDate, setCurrentSelectedDate] = useState("")

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
      <Container>
        <DateSelection
          currentSelectedDate={currentSelectedDate}
          setCurrentSelectedDate={setCurrentSelectedDate}
          planDateList={gameList.planDateList}
        />
        <TimeTable list={gameListBySelectedTeamListAndDate}></TimeTable>
      </Container>
    </Wrapper>
  )
}

export default Schedule
