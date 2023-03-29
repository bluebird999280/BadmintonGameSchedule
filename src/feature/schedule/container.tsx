import TimeTable from "./component/TimeTable"
import ClubList from "./component/ClubList"
import TeamList from "./component/TeamList"
import { Wrapper, Container } from "./style"

function Schedule(): JSX.Element {
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
