import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeQuery } from "./slice"
import { getCompetitionByName } from "./thunk"
import SearchBar from "./component/SearchBar"
import SearchButton from "./component/SearchButton"
import SearchList from "./component/SearchList"
import IndexButton from "./component/IndexButton"
import { Wrapper, Container } from "./style"

function Search(): JSX.Element {
  const query = useAppSelector((state) => state.search.query)
  const dispatch = useAppDispatch()

  const searchOnSubmit = useCallback(
    (e: React.FormEvent | undefined) => {
      e?.preventDefault()
      dispatch(getCompetitionByName(query))
    },
    [dispatch, query]
  )

  const searchBarOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(event.target.value))
    },
    [dispatch]
  )

  return (
    <div>
      <Wrapper>
        <Container>
          <form className="search" onSubmit={searchOnSubmit}>
            <SearchBar query={query} onChange={searchBarOnChange} />
            <SearchButton onClick={searchOnSubmit} />
          </form>
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
