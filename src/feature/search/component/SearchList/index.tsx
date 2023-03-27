import { Wrapper, ProgressWrapper, TextContainer } from "./style"
function SearchList(): JSX.Element {
  return (
    <Wrapper>
      <ProgressWrapper type="progress">진행</ProgressWrapper>
      <TextContainer>
        <div className="title">
          2023 모다모다 x 전국스매싱자랑 전국 배드민턴 대회
        </div>
        <div className="date">04월 02일 ~ 04월 02일</div>
      </TextContainer>
    </Wrapper>
  )
}

export default SearchList
