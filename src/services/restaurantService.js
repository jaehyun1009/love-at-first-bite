import * as tokenService from "./tokenService"
const BASE_URL = "/api/restaurants/"

export function search(location, category){
  return fetch(
    `${BASE_URL}search/${location}/${category}`,
    {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function searchWithoutCategory(location){
  return fetch(
    `${BASE_URL}search/${location}`,
    {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function searchOne(id){
  return fetch(
    `${BASE_URL}searchOne/${id}`,
    {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    },{
      mode: 'cors'
    }).then(res => res.json())
}