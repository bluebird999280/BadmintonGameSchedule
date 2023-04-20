import ListContainer from "feature/search/team/searchListContainer"
import FormContainer from "feature/search/team/searchFormContainer"
import { useState } from "react"

function SearchTeamPage(): JSX.Element {
  const [query, setQuery] = useState("")

  return (
    <div>
      <FormContainer query={query} setQuery={setQuery} />
      <ListContainer query={query} />
    </div>
  )
}

export default SearchTeamPage
