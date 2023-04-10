import TimeTable from "./component/TimeTable"
import ClubList from "./component/ClubList"
import TeamList from "./component/TeamList"
import { Wrapper, Container } from "./style"
import { useMemo, useEffect } from "react"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { clubList } = useAppSelector((state) => ({
    clubList: state.search.clubList,
  }))

  const selectedClubList = useMemo(
    () => clubList.filter((club) => club.selected),
    [clubList]
  )

  useEffect(() => {
    dispatch(
      getAllGameList({
        tournamentId: "TM_20220507170501",
        planDate: "",
      })
    )
  }, [dispatch])

  return (
    <Wrapper>
      <Container>
        <TimeTable></TimeTable>
        <ClubList></ClubList>
        <TeamList></TeamList>
      </Container>
    </Wrapper>
  )
}

export default Schedule
