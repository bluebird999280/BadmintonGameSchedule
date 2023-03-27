import SearchBar from "./component/SearchBar"
import SearchButton from "./component/SearchButton"
import SearchList from "./component/SearchList"
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
          <div className="pagination">
            <IndexButton />
            <IndexButton />
            <IndexButton />
            <IndexButton />
          </div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default Search
