import * as tokenService from "./tokenService"
const BASE_URL = "/api/users/"

export function updateUser(user){
  return fetch(
    `${BASE_URL}updateUser`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() },
      body: JSON.stringify(user)
    },{
      mode: 'cors'
    }).then(res => res.json())
}