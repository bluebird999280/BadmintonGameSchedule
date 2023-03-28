import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { changeQuery } from "./slice"
import { getCompetitionByName } from "./thunk"
import SearchList from "./component/SearchList"
import IndexButton from "./component/IndexButton"
import { Wrapper, Container } from "./style"
import SearchForm from "./component/SearchForm"

function Search(): JSX.Element {
  // redux
  const dispatch = useAppDispatch()
  const { query, competionList } = useAppSelector((state) => ({
    query: state.search.query,
    competionList: state.search.competionList,
  }))

  // useCallback
  const searchFormOnSubmit = useCallback(
    (e: React.FormEvent | undefined) => {
      e?.preventDefault()
      dispatch(getCompetitionByName(query))
    },
    [dispatch, query]
  )

  const searchFormOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeQuery(event.target.value))
    },
    [dispatch]
  )

  return (
    <div>
      <Wrapper>
        <Container>
          <SearchForm
            query={query}
            onChange={searchFormOnChange}
            onSubmit={searchFormOnSubmit}
          />
          <div className="list">
            {competionList !== undefined &&
              competionList.map((list, index) => (
                <SearchList
                  key={index}
                  progress={
                    list.STAT === "4"
                      ? "progress"
                      : list.STAT === "5"
                      ? "completion"
                      : "schedule"
                  }
                  title={list.TOURNAMENT_NM}
                  date={list.TOUR_DATE}
                />
              ))}
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
