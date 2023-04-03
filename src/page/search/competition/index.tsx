import SearchFormContainer from "feature/search/container/searchFormContainer"
import SearchListContainer from "feature/search/container/searchListContainer"
import PagenationContainer from "feature/search/container/pagenationContainer"

function SearchCompetition(): JSX.Element {
  return (
    <>
      <SearchFormContainer />
      <SearchListContainer />
      <PagenationContainer />
    </>
  )
}

export default SearchCompetition
