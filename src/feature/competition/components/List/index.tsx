import { Wrapper, ProgressWrapper, TextContainer } from "./style"
import { progressType, IListProps } from "./type"

const nameByProgress = {
  schedule: "예정",
  progress: "진행",
  completion: "완료",
}

export default function List({
  data,
  selected,
  onClick,
}: IListProps): JSX.Element {
  let stat: progressType = "schedule"
  if (data.STAT === "4") stat = "progress"
  else if (data.STAT === "5") stat = "completion"

  return (
    <Wrapper onClick={onClick} selected={selected} type={stat}>
      <ProgressWrapper type={stat}>{nameByProgress[stat]}</ProgressWrapper>
      <TextContainer>
        <div className="title">{data.TOURNAMENT_NM}</div>
        <div className="date">{data.TOUR_DATE}</div>
      </TextContainer>
    </Wrapper>
  )
}
