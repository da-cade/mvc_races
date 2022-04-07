
import { Racer } from "./Models/Racer.js";

let racer1 = new Racer("Mario", "racer-1", "mdi mdi-alpha-m")
let racer2 = new Racer("Luigi", "racer-2", "mdi mdi-alpha-l")
let racer3 = new Racer("DK", "racer-3", "mdi mdi-alpha-d")
let racer4 = new Racer("Peach", "racer-4", "mdi mdi-alpha-p")

const AppState = {
  racers: [racer1, racer2, racer3, racer4]
}

export const appState = AppState
