export interface IInitialState {
  query: string
  currentPage: number
  clubTable: IClubTable | null
  searchedClubNameArray: string[][]
}

export interface IClubData {
  index: number
  team: ITeamData[]
  teamCount: number
  selected: boolean
}

export interface IClubTable {
  [clubName: string]: IClubData
}

export interface ISelectTeamPayload {
  clubName: string
  teamIndex: number
}

export interface ITeamData {
  EVENT_ID: string
  EVENT_NM: string
  GENDER: string
  AGE: string
  GRADE: string
  ENTRY_ID: string
  SEED: string
  PLAYER_ID: string
  CLUB_NM1: string
  PLAYER_NM1: string
  NICK_NM1: string | null
  GENDER1: string
  PARTNER_ID: string
  CLUB_NM2: string
  PLAYER_NM2: string
  NICK_NM2: string | null
  GENDER2: string
  REG_DATE: string
  CHG_DATE: string
  POINT_YN: string
  ADVANTAGE: string
  MATCH_OPEN_YN: string
  selected?: boolean
  searched?: boolean
}
