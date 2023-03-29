import { Wrapper } from "./style"

interface IIndexButtonProps {
  index: number
  onClick: () => void
}
function IndexButton({ index, onClick }: IIndexButtonProps): JSX.Element {
  return <Wrapper onClick={onClick}>{index}</Wrapper>
}

export default IndexButton
