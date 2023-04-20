import { ButtonWrapper } from "./style"
import PaginationButton from "../PaginationButton"
import { LIST_UNIT, PAGE_UNIT } from "util/constant"
import { IPaginationProps } from "./type"

function PaginationList({
  length,
  pageRange,
  currentPageIndex,
  currentPageRange,
  onClick,
  movePrev,
  moveNext,
}: IPaginationProps): JSX.Element {
  if (length === 0) return <></>
  return (
    <ButtonWrapper>
      {currentPageRange > 0 && (
        <PaginationButton index="<" onClick={movePrev} />
      )}
      {Array.from({ length: pageRange }).map((_, index: number) => (
        <PaginationButton
          key={currentPageIndex + index + 1}
          index={currentPageIndex + index + 1}
          onClick={onClick(currentPageIndex + index)}
        />
      ))}
      {length > (currentPageRange + 1) * PAGE_UNIT * LIST_UNIT && (
        <PaginationButton index=">" onClick={moveNext} />
      )}
    </ButtonWrapper>
  )
}

export default PaginationList
