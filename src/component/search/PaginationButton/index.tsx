import { Wrapper } from "./style"
import { IButtonProps } from "./type"

function Button({ index, onClick }: IButtonProps): JSX.Element {
  return <Wrapper onClick={onClick}>{index}</Wrapper>
}

export default Button
