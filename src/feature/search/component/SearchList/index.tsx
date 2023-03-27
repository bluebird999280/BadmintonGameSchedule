import { Wrapper, ProgressWrapper, TextContainer } from "./style"
import { ISearchListProps } from "./type"

const nameByProgress = {
  schedule: "예정",
  progress: "진행",
  completion: "완료",
}

function SearchList({ progress, title, date }: ISearchListProps): JSX.Element {
  return (
    <Wrapper>
      <ProgressWrapper type={progress}>
        {nameByProgress[progress]}
      </ProgressWrapper>
      <TextContainer>
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </TextContainer>
    </Wrapper>
  )
}

export default SearchList
