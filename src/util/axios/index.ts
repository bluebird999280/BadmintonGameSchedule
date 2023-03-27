import axios from "axios"

export default axios.create({
  baseURL: "https://sponet.co.kr/php/bm/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
})
