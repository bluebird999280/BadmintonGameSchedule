import { Wrapper, Container, Searchbar, SearchButton } from "./style"

function App() {
  return (
    <div>
      <Wrapper>
        <Container>
          <div className="search">
            <Searchbar />
            <SearchButton />
          </div>
          <div className="list"></div>
          <div className="index"></div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default App
