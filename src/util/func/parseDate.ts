// date : yyyymmdd -> yyyy년 mm월 dd월
function parseDate(date?: string) {
  if (date === undefined) return ""
  return (
    date.substring(0, 4) +
    "년 " +
    date.substring(4, 6) +
    "월 " +
    date.substring(6, 8) +
    "일"
  )
}

export default parseDate
