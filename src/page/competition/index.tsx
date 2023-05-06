import FormContainer from "feature/competition/containers/Form"
import ListContainer from "feature/competition/containers/List"
import PagenationContainer from "feature/competition/containers/Pagenation"

export default function competitionPage(): JSX.Element {
  return (
    <>
      <FormContainer />
      <ListContainer />
      <PagenationContainer />
    </>
  )
}
