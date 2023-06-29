import { useEffect, useState, useMemo, useRef, useCallback } from "react"
import TimeTable from "./component/TimeTable"
import DateSelection from "./component/DateSelection"
import DownloadSchedule from "component/schedule/DownloadSchedule"
import { Wrapper, Container } from "./style"
import { getAllGameList } from "./thunk"
import { useAppSelector, useAppDispatch } from "hook/redux"
import { CheckTableType } from "./type"
import dti from "dom-to-image"
import { saveAs } from "file-saver"
import parseDate from "util/func/parseDate"

function Schedule(): JSX.Element {
  const dispatch = useAppDispatch()
  const { tournamentId, gameList } = useAppSelector((state) => ({
    tournamentId: state.competition.competition?.TOURNAMENT_ID,
    gameList: state.schedule.gameList,
  }))

  // useRef
  const downloadRef = useRef<HTMLDivElement | null>(null)

  // useState
  const [currentSelectedDate, setCurrentSelectedDate] = useState("")

  // useCallback
  const onClickDownloadButton = useCallback(async () => {
    if (downloadRef.current !== null) {
      const blob = await dti.toBlob(downloadRef.current)
      saveAs(blob, parseDate(currentSelectedDate) + ".png")
    }
  }, [currentSelectedDate])

  useEffect(() => {
    if (tournamentId !== undefined)
      dispatch(
        getAllGameList({
          tournamentId,
          planDate: "",
        })
      )
  }, [dispatch, tournamentId])

  if (gameList === undefined) return <></>
  return <Wrapper></Wrapper>
}

export default Schedule
