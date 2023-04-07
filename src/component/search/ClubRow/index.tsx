import { Wrapper, TextContainer } from "./style"
import { IRowProps } from "./type"

function Row({ data, selected, onClick }: IRowProps): JSX.Element {
  return (
    <Wrapper onClick={onClick} selected={selected}>
      <TextContainer>
        <div className="title">{data.PLAYER_NM1}</div>
      </TextContainer>
    </Wrapper>
  )
}

export default Row
