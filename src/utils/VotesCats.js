import { API_KEY, API_VOTES } from "../Variables.js";
export async function LoadVotesCats(){
    const res = await fetch(API_VOTES,{
      headers:{
        "x-api-key": API_KEY
      }
    })
    const data = await res.json();
    console.log(data)
    return data
  }
export async function VoteUp(id){
    const res = await fetch(API_VOTES,{
      method: "POST",
      headers:{
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id:id,
        value:1
      })
      
    })
    const data = await res.json()
    console.log("Vote Up")
    console.log(id)
    console.log(res.status)
    console.log(data)
  }
export async function VoteDown(id){
    const res = await fetch(API_VOTES,{
      method: "POST",
      headers:{
        "x-api-key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id:id,
        value:-1
      })
      
    })
    const data = await res.json()
    console.log("Vote Down")
    console.log(id)
    console.log(res.status)
    console.log(data)
  }