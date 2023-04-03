import { ButtonWrapper } from "./style"
import PaginationButton from "../PaginationButton"
import { PAGE_UNIT } from "util/constant"

interface IPaginationProps {
  length: number
  currentPageRange: number
  onClick: (page: number) => () => void
  movePrev: () => void
  moveNext: () => void
}

function PaginationList({
  length,
  currentPageRange,
  onClick,
  movePrev,
  moveNext,
}: IPaginationProps): JSX.Element {
  const currentPageIndex = currentPageRange * PAGE_UNIT
  const nextPageIndex = currentPageIndex + PAGE_UNIT
  const lastPageIndex = nextPageIndex <= length ? nextPageIndex : length
  const pageRange = lastPageIndex - currentPageIndex

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
      {length > (currentPageRange + 1) * PAGE_UNIT && (
        <PaginationButton index=">" onClick={moveNext} />
      )}
    </ButtonWrapper>
  )
}

export default PaginationList
