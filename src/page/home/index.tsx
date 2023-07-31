import { Manual, DevelopCycle } from "./style"
import { Wrapper, Container, Introduction } from "./style"
import { Timeline, Collapse } from "antd"

const { Panel } = Collapse

function HomePage(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Collapse
          onChange={(key: string | string[]) => {
            console.log(key)
          }}
        >
          <Panel header="사용법" key="1">
            <Manual>
              <p>
                <sup>1</sup>
                <strong>대회 검색</strong>에서는 대회를 검색하고 선택할 수
                있습니다.
              </p>
              <p>
                <sup>2</sup>
                <strong>클럽 검색</strong>에서는 대회에 출전하는 클럽을 선택할
                수 있습니다.
              </p>
              <p>
                <sup>3</sup>
                <strong>팀 검색</strong>에서는 클럽에서 출전하는 선수들 중,
                시간표에 반영할 선수를 선택할 수 있습니다.
              </p>
              <br />
              <p>
                대회 선택 -&gt; 클럽 선택 -&gt; 선수 선택 -&gt; 시간표
                보기(이미지 다운로드 가능)
              </p>
            </Manual>
          </Panel>
          <Panel header="개발사항" key="2">
            <DevelopCycle>
              <Timeline
                mode="left"
                items={[
                  {
                    label: "2023년 3월 22일",
                    children: "아이디어 설정",
                    color: "red",
                  },
                  {
                    label: "2023년 3월 23일",
                    children: "깃허브에 프로젝트 개시",
                  },
                  {
                    label: "2023년 3월 27일",
                    children: "대회 목록 보여주기 및 검색 기능 추가",
                  },

                  {
                    label: "2023년 4월 5일",
                    children: "해당 대회의 클럽 목록 보여주기",
                  },
                  {
                    label: "2023년 4월 7일",
                    children: "클럽 검색 기능 제공하기",
                  },
                  {
                    label: "2023년 4월 10일",
                    children: "클럽별 팀 목록 및 검색 기능 제공하기",
                  },
                  {
                    label: "2023년 4월 20일",
                    children: "클럽 시간표 제공하기",
                  },
                ]}
              />
            </DevelopCycle>
          </Panel>
          <Panel header="소개" key="3">
            <Introduction>
              <div className="text">
                <p>
                  개발자 : <strong>장동건</strong>
                </p>
                <p>1.0.0 개발 기간 : 2023/3/23 ~ 2023/4/20</p>
              </div>

              <div className="icons">
                <a
                  href="https://github.com/psycho-o0o/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="깃허브 아이콘"
                    src={process.env.PUBLIC_URL + "/icon/github.svg"}
                  />
                </a>
                <a
                  href="https://psycho-logsomething.tistory.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="티스토리 아이콘"
                    src={process.env.PUBLIC_URL + "/icon/tistory.png"}
                  />
                </a>
                <a
                  href="https://psycoma.notion.site/Work-2072257a843e447e9b598a162c7ede12"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="노션 아이콘"
                    src={process.env.PUBLIC_URL + "/icon/notion.svg"}
                  />
                </a>
              </div>
            </Introduction>
          </Panel>
        </Collapse>
      </Container>
    </Wrapper>
  )
}

export default HomePage
