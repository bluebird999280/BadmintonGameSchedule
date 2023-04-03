import { Wrapper } from "./style"
import { useMemo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { PAGE_UNIT } from "util/constant"
import { changeCurrentPage } from "./slice"
import Button from "./component/Button"

function Pagenation(): JSX.Element {
  const dispatch = useAppDispatch()
  const { list, currentPageRange } = useAppSelector((state) => ({
    list: state.search.list,
    currentPageRange: Math.floor(state.pagenation.currentPage / PAGE_UNIT),
  }))

  // useCallback
  const indexButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  const movePrevPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange - 1) * PAGE_UNIT))
  }, [dispatch, currentPageRange])

  const moveNextPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange + 1) * PAGE_UNIT))
  }, [dispatch, currentPageRange])

  //useMemo
  const PagenationButton = useMemo(() => {
    const currentPageIndex = currentPageRange * PAGE_UNIT
    const nextPageIndex = currentPageIndex + PAGE_UNIT

    return list
      .slice(currentPageIndex, nextPageIndex)
      .map((_: any, index: number) => (
        <Button
          key={currentPageIndex + index + 1}
          index={currentPageIndex + index + 1}
          onClick={indexButtonOnClick(currentPageIndex + index)}
        />
      ))
  }, [list, currentPageRange])

  if (list.length === 0) return <></>
  return (
    <Wrapper>
      {currentPageRange > 0 && (
        <Button index="<" onClick={movePrevPagenationList} />
      )}
      {PagenationButton}
      {list.length > (currentPageRange + 1) * PAGE_UNIT && (
        <Button index=">" onClick={moveNextPagenationList} />
      )}
    </Wrapper>
  )
}

export default Pagenation
