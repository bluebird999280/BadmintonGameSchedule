export interface ICompetition {
  ACCEPT_DATE: string
  ACCEPT_DATE_FROM: string
  ACCEPT_DATE_M: string
  ACCEPT_DATE_TO: string
  CONTENTS: string
  ENTRY_OPEN_YN: string
  FILE_GROUP_ID: string
  GRADE: string
  HOMEPAGE_URL: string
  HOST_GROUP: string
  IS_APPLY_SPONET: string
  IS_ENTER_REG: string
  IS_ENTRY_RCPT: string
  IS_SHOW_TEAM_CNT: string
  IS_SPONET: string
  MATCH_OPEN_YN: string
  MULTI_GROUP_YN: string
  POSTER: string
  POSTER2: string
  RANK34_TYPE: string
  REG_DATE: string
  REG_ID: string
  ROUND_FINAL_TYPE: string
  ROUND_QUALIFY_TYPE: string
  STAT: string
  STAT_NM: string
  STAT_ORDER: string
  TEAM_NM_TYPE: string
  TM_ORDER: string
  TM_OUTLINE_FILE_URL: string
  TM_PASSWD: string
  TOURNAMENT_ID: string
  TOURNAMENT_NM: string
  TOUR_DATE: string
  TOUR_DATE_FROM: string
  TOUR_DATE_M: string
  TOUR_DATE_TO: string
  TOUR_LEVEL: string
  TOUR_LOCATION: string
  TOUR_MANAGER: string
  TOUR_SPONSOR: string
  TOUR_SUPPORT: string
}

// Slice
export interface IInitialState {
  query: string
  pageStart: number
  currentPage: number
  competition?: ICompetition
  competitionArray: ICompetition[][]
}
