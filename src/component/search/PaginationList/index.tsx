import { ButtonWrapper } from "./style"
import PaginationButton from "../PaginationButton"
import { LIST_UNIT, PAGE_UNIT } from "util/constant"
import { useMemo } from "react"

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
  const currentPageIndex = useMemo(
    () => currentPageRange * PAGE_UNIT,
    [currentPageRange]
  )
  const pageRange = useMemo(() => {
    const nextPageIndex = currentPageIndex + PAGE_UNIT
    const pageLength = Math.ceil(length / LIST_UNIT)

    if (nextPageIndex <= pageLength) return PAGE_UNIT
    return PAGE_UNIT - nextPageIndex + pageLength
  }, [length, currentPageIndex])

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
