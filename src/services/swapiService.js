// services
import * as tokenService from './tokenService'

const baseUrl = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/starships`
//Obtain all the starships from the API 
async function getAllStarships(){
  try {
    const res = await fetch(`${baseUrl}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    if(!res.okay) {
      throw new Error ('err fetching all starships')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
} 

export{
  getAllStarships, 
}