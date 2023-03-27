import { useState, useCallback } from "react"
import { Wrapper, StyledInput } from "./style"

function SearchBar(): JSX.Element {
  const [value, setValue] = useState("")

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }, [])

  return (
    <Wrapper>
      <StyledInput value={value} onChange={onChange} />
    </Wrapper>
  )
}

export default SearchBar
