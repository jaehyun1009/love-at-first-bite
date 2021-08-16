import * as tokenService from "./tokenService"
const BASE_URL = "/api/messages"

export function getMessaged(){
  return fetch(`${BASE_URL}/messaged`,
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  },{
    mode: 'cors'
  }).then(res => res.json())
}
