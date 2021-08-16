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
export function getMessages(id){
  return fetch(`${BASE_URL}/messages/${id}`,
  {
    headers: { Authorization: "Bearer " + tokenService.getToken() }
  },{
    mode: 'cors'
  }).then(res => res.json())
}

export function newMessage(id,formData){
  return fetch(
    `${BASE_URL}/new/${id}`,
    {
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(formData)
    },{
      mode: 'cors'
    }).then(res => res.json())
}
