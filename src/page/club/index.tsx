import FormContainer from "feature/club/containers/Form"
import ListContainer from "feature/club/containers/List"
import PagenationContainer from "feature/club/containers/Pagenation"
export default function ClubPage(): JSX.Element {
  return (
    <>
      <FormContainer />
      <ListContainer />
      <PagenationContainer />
    </>
  )
}
