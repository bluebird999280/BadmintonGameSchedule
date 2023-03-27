export interface IPayload {
  data_list?: any[]
  gymList?: any[]
  fileList?: any[]
  ResultCode: string
}

export interface IInitialState {
  query: string
  competionList?: any[]
}
