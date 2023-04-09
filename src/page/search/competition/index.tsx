import SearchFormContainer from "feature/search/competition/searchFormContainer"
import SearchListContainer from "feature/search/competition/searchListContainer"
import PagenationContainer from "feature/search/competition/pagenationContainer"
import { useCallback, useState } from "react"

function SearchCompetition(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <>
      <SearchFormContainer />
      <SearchListContainer currentPage={currentPage} />
      <PagenationContainer
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default SearchCompetition
