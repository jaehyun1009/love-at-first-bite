import * as tokenService from "./tokenService"
const BASE_URL = "/api/restaurants/"

export function search(location, name){
  return fetch(
    `${BASE_URL}search/${location}/${name}`,
    {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function searchWithoutName(location){
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

export function addRestaurant(restaurant){
  return fetch(
    `${BASE_URL}addRestaurant`,
    {
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(restaurant)
    },{
      mode: 'cors'
    }).then(res => res.json())
}

export function removeRestaurant(id){
  return fetch(
    `${BASE_URL}removeRestaurant/${id}`,
    {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    },{
      mode: 'cors'
    }).then(res => res.json())
}