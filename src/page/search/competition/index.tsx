import SearchFormContainer from "feature/search/competition/searchFormContainer"
import SearchListContainer from "feature/search/competition/searchListContainer"
import PagenationContainer from "feature/search/competition/pagenationContainer"

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
