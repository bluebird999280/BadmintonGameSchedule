export interface IInitialState {
  competition?: any
  club?: string[]
  gameList?: IGameListProps
  loading: boolean
}

export interface IDataListProps {
  CHG_DATE: string
  COURT_NO: string
  COURT_SORT: string
  DEFAULT_WIN_SCORE: string
  DRAW_ID: string
  DRAW_NM: string
  DRAW_TYPE: string
  END_TIME: string
  ENTRY_ID: string
  EVENT_ID: string
  EVENT_NM: string
  GAME_TYPE: string
  GYM_CD: string
  LOSER_ID: string
  MATCH_ID: string
  MATCH_STS: string
  MATCH_STS_NM: string
  NEXTPLAN_NO: string
  PLAN_DATE: string
  PLAN_NO: string
  PREPLAN1_NO: string
  PREPLAN2_NO: string
  REG_DATE: string
  REMARK1: string
  REMARK2: string
  RETIRED_YN: string
  SEQ: string
  SET_COUNT: string
  SET_SCORE1: string
  SET_SCORE2: string
  START_TIME: string
  SUB_SEQ: string
  T1CLUB: string
  T1CLUB2: string
  T1CLUB_ID: string
  T1CLUB_ID2: string
  T1_ADVANTAGE: string
  T1_PLAYER: string
  T1_PLAYER1_ID: string
  T1_PLAYER2_ID: string
  T1_SET1: string
  T2CLUB: string
  T2CLUB2: string
  T2CLUB_ID: string
  T2CLUB_ID2: string
  T2_ADVANTAGE: string
  T2_PLAYER: string
  T2_PLAYER1_ID: string
  T2_PLAYER2_ID: string
  T2_SET1: string
  TEAM1_ENTRY_ID: string
  TEAM2_ENTRY_ID: string
  TOTAL_SCORE1: string
  TOTAL_SCORE2: string
  TOURNAMENT_ID: string
  WALKOVER_YN: string
  WIN: string
  WINNER_ID: string
}

export interface IPlanDateProps {
  PLAN_DATE: string
}

export interface IGameListProps {
  data_list: IDataListProps[]
  planDateList: IPlanDateProps[]
  gymList: []
  startTimeList: []
  courtList: []
  sTimeMap: []
  sCourtMap: []
}

export type CheckTableType = {
  [eventId: string]: {
    [entryId: string]: boolean
  }
} | null
