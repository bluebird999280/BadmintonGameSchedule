import { Wrapper } from "./style"
import { IButtonProps } from "./type"

function Button({
  onClick,
  children,
}: React.PropsWithChildren<IButtonProps>): JSX.Element {
  return <Wrapper onClick={onClick}>{children}</Wrapper>
}

export default Button
