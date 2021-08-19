import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles/"

export function getUserProfile(){
  return fetch(
    `${BASE_URL}userProfile`,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function getAllProfiles(){
  return fetch(
    BASE_URL,
    {
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function updatedProfile(profile) {
  console.log('going to update the profile', profile);
  return fetch(
    `${BASE_URL}userProfile`, 
    {
    method: 'PUT', 
    body: JSON.stringify(profile),
    headers: { 'Content-Type': 'application/json', Authorization: "Bearer " + tokenService.getToken()},
  },
  { mode: "cors"}
  )
  .then(res => res.json())
}
