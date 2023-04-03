import { Wrapper, Container, Title, ClubRow } from "./style"
import SearchForm from "feature/search/component/SearchForm"

function ClubList(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Title>클럽 목록</Title>
        <SearchForm
          query=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(1)
          }}
          onSubmit={(e: React.FormEvent | undefined) => {
            console.log(1)
          }}
        />
        <ClubRow>
          <span className="name">G.M클럽</span>
          <span className="teamCount">56팀(110명)</span>
        </ClubRow>
        <ClubRow>
          <span className="name">구립클럽</span>
          <span className="teamCount">89팀(175명)</span>
        </ClubRow>
        <ClubRow>
          <span className="name">돈암클럽(야간)</span>
          <span className="teamCount">40팀(73명)</span>
        </ClubRow>
        <ClubRow>
          <span className="name">돈암클럽(조기)</span>
          <span className="teamCount">4팀(8명)</span>
        </ClubRow>
        <ClubRow>
          <span className="name">미아클럽(야간)</span>
          <span className="teamCount">27팀(54명)</span>
        </ClubRow>
        <ClubRow>
          <span className="name">미아클럽</span>
          <span className="teamCount">24팀(470명)</span>
        </ClubRow>
      </Container>
    </Wrapper>
  )
}

export default ClubList
