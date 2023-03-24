import SearchBar from "./component/SearchBar"
import SearchButton from "./component/SearchButton"
import SearchList from "./component/SearchList"
import ShowMoreIndexButton from "./component/ShowMoreIndexButton"
import IndexButton from "./component/IndexButton"
import { Wrapper, Container } from "./style"

function Search(): JSX.Element {
  return (
    <div>
      <Wrapper>
        <Container>
          <div className="search">
            <SearchBar />
            <SearchButton />
          </div>
          <div className="list">
            <SearchList />
            <SearchList />
            <SearchList />
          </div>
          <div className="index">
            <div>
              <ShowMoreIndexButton />
            </div>
            <div>
              <IndexButton />
              <IndexButton />
              <IndexButton />
              <IndexButton />
            </div>
            <div>
              <ShowMoreIndexButton />
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
