import { Wrapper, TextContainer } from "./style"
import { IRowProps } from "./type"

function Row({ data, selected, onClick }: IRowProps): JSX.Element {
  return (
    <Wrapper onClick={onClick}>
      <TextContainer selected={selected}>
        <div className="title">{data.name}</div>
        <div className="count">{data.count}팀</div>
      </TextContainer>
    </Wrapper>
  )
}

export default Row
