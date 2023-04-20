import SearchFormContainer from "feature/search/club/searchFormContainer"
import SearchListContainer from "feature/search/club/searchListContainer"
import PagenationContainer from "feature/search/club/pagenationContainer"
import { useState, useCallback } from "react"

function SearchClubPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0)

  const changeCurrentPage = useCallback((page: number) => {
    setCurrentPage(page)
  }, [])

  return (
    <>
      <SearchFormContainer />
      <SearchListContainer currentPage={currentPage} />
      <PagenationContainer
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </>
  )
}

export default SearchClubPage
