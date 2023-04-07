import SearchFormContainer from "feature/search/club/searchFormContainer"
import SearchListContainer from "feature/search/club/searchListContainer"
import { useState } from "react"

function SearchClubPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <>
      <SearchFormContainer />
      <SearchListContainer currentPage={currentPage} />
    </>
  )
}

export default SearchClubPage
