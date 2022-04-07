

import { appState } from "./AppState.js";

function _drawRacers(){
  let template = ""
  const racers = appState.racers
  racers.forEach(r => {template += r.Template});
  document.getElementById("racers").innerHTML = template
}

let _raceId = ''

function _moveRacers(){
  console.log("Start!")
  const racers = appState.racers
  racers.forEach(r => {
    if(r.position >= 93){
      clearInterval(_raceId)
      document.getElementById(r.id + '-tag').innerText = "Winner!"
    }
    let randInt = Math.floor(Math.random() * 4)
    r.position += randInt
    document.getElementById(r.id).style.paddingLeft = r.position + '%'
  });
}

export class RaceController {
  constructor(){
    this.drawRacers()
  
  }
  drawRacers(){
    _drawRacers()
  }
  moveRacers(){
    _raceId = setInterval(_moveRacers, 100)
  }
}