import { Wrapper, SearchImageWrapper } from "./style"

const searchImageUrl = process.env.PUBLIC_URL + "/icon/search.png"

function SearchButton(): JSX.Element {
  return (
    <Wrapper>
      <SearchImageWrapper>
        <img src={searchImageUrl} />
      </SearchImageWrapper>
    </Wrapper>
  )
}

export default SearchButton
