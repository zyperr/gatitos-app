import { API_KEY, API_VOTES } from "../Variables.js";
import { createSubId } from "./createSubId.js";

const user_id = createSubId();

export async function LoadVotesCats(){
    const res = await fetch(API_VOTES,{
      headers:{
        "x-api-key": API_KEY,
        "sub_id":user_id
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
        "Content-Type": "application/json",
        "sub_id":user_id
      },
      body: JSON.stringify({
        image_id:id,
        sub_id:user_id,
        value:1
      })
      
    })
    const data = await res.json()
    console.log(data)
  }
export async function VoteDown(id){
    const res = await fetch(API_VOTES,{
      method: "POST",
      headers:{
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
        "sub_id":user_id
      },
      body: JSON.stringify({
        image_id:id,
        sub_id:user_id,
        value:-1
      })
      
    })
    const data = await res.json()
      console.log(data)
  }