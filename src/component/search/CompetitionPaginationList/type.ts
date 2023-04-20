export interface IPaginationProps {
  length: number
  currentPageIndex: number
  currentPageRange: number
  pageRange: number
  onClick: (page: number) => () => void
  movePrev: () => void
  moveNext: () => void
}
