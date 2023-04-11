import TimeTable from "./component/TimeTable"
import DateSelection from "./component/DateSelection"
import { Wrapper, Container } from "./style"
import { useEffect, useMemo } from "react"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { tournamentId, selectedClubList, gameList } = useAppSelector(
    (state) => ({
      tournamentId: state.schedule.competition?.TOURNAMENT_ID,
      selectedClubList: state.search.clubList.filter((club) => club.selected),
      gameList: state.schedule.gameList,
    })
  )

  const checkTable = useMemo(() => {
    const temp: any = {}
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

  const gameListBySelectedTeamList = useMemo(() => {
    const { data_list } = gameList

    if (data_list !== undefined)
      return data_list.filter((data) => {
        if (checkTable[data.EVENT_ID] !== undefined) {
          return (
            checkTable[data.EVENT_ID][data.TEAM1_ENTRY_ID] === true ||
            checkTable[data.EVENT_ID][data.TEAM2_ENTRY_ID] === true
          )
        }
        return false
      })
  }, [checkTable, gameList])

  useEffect(() => {
    if (tournamentId !== undefined)
      dispatch(
        getAllGameList({
          tournamentId,
          planDate: "",
        })
      )
  }, [dispatch])

  return (
    <Wrapper>
      <Container>
        <DateSelection />
        <TimeTable list={gameListBySelectedTeamList}></TimeTable>
      </Container>
    </Wrapper>
  )
}

export default Schedule
