import { Wrapper } from "./style"
import { useMemo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { pageUnit } from "util/constant"
import { changeCurrentPage } from "./slice"
import Button from "./component/Button"

function PagenationContainer(): JSX.Element {
  const dispatch = useAppDispatch()
  const { list, currentPageRange } = useAppSelector((state) => ({
    list: state.search.pageCompetionList,
    currentPageRange: Math.floor(state.pagenation.currentPage / pageUnit),
  }))

  // useCallback
  const indexButtonOnClick = useCallback(
    (page: number) => () => {
      dispatch(changeCurrentPage(page))
    },
    [dispatch]
  )

  const movePrevPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange - 1) * pageUnit))
  }, [dispatch, currentPageRange])

  const moveNextPagenationList = useCallback(() => {
    dispatch(changeCurrentPage((currentPageRange + 1) * pageUnit))
  }, [dispatch, currentPageRange])

  //useMemo
  const PagenationButton = useMemo(() => {
    const currentPageIndex = currentPageRange * pageUnit
    const nextPageIndex = currentPageIndex + pageUnit

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
      {list.length > (currentPageRange + 1) * pageUnit && (
        <Button index=">" onClick={moveNextPagenationList} />
      )}
    </Wrapper>
  )
}

export default PagenationContainer
