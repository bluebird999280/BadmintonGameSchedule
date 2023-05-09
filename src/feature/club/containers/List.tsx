import { useMemo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "hook/redux"
import { selectClub } from "../slice"
import List from "../components/List"

export default function ListContainer(): React.ReactElement {
  const dispatch = useAppDispatch()
  const { clubTable } = useAppSelector((state) => ({
    clubTable: state.club.clubTable,
  }))

  const searchedClubNameArray = useMemo(() => {
    if (clubTable !== null) {
      return Object.getOwnPropertyNames(clubTable).filter(
        (clubName) => clubTable[clubName].searched
      )
    }
  }, [clubTable])

  const onClick = useCallback(
    (clubName: string) => () => {
      dispatch(selectClub(clubName))
    },
    [dispatch]
  )

  if (clubTable === null) return <></>
  return (
    <>
      {searchedClubNameArray?.map((clubName) => (
        <List
          key={clubName}
          name={clubName}
          data={clubTable[clubName]}
          onClick={onClick(clubName)}
        />
      ))}
    </>
  )
}
