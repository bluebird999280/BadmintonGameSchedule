import { Wrapper, TextContainer } from "./style"
import { IListProps } from "./type"

function List({ name, data, onClick }: IListProps): JSX.Element {
  return (
    <Wrapper onClick={onClick}>
      <TextContainer selected={data.selected}>
        <div className="title">{name}</div>
        <div className="count">{data.teamCount}팀</div>
      </TextContainer>
    </Wrapper>
  )
}

export default List
