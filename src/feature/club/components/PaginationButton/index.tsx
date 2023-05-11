import { Wrapper } from "./style"
import { IButtonProps } from "./type"

function Button({
  onClick,
  isHidden,
  children,
}: React.PropsWithChildren<IButtonProps>): JSX.Element {
  return (
    <Wrapper onClick={onClick} isHidden={isHidden}>
      {children}
    </Wrapper>
  )
}

export default Button
