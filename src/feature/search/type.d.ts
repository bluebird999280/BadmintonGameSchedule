export interface ICompetitionData {
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
}

// slice type
export interface IInitialState {
  competitionList: ICompetitionData[][]
  teamListByClub: {
    [club: string]: ITeamData[]
  }
}

export interface IGetCompetitionByNameResponse {
  data_list: IDataList[]
  gymList: any[]
  fileList: any[]
  ResultCode: string
}

export interface IGetClubListByCompetitionResponse {
  data_total: number
  data_list: ITeamData[][]
  ResultCode: string
}

// thunk type
export interface IGetCompetitionByName {
  query: string
  pageStart: number
  pageLimit: number
}

export interface IGetClubListByCompetition {
  competitionId?: string
}
