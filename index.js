let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayStoreEl = document.getElementById("away-score")
let awayScore = 0

function increaseAwayScoreOne() {
    awayScore += 1
    awayStoreEl.textContent = awayScore
}

let awayScoreBtnTwo = document.getElementById("away-score-btn-2")

function increaseAwayScoreTwo() {
    awayScore += 2
    awayStoreEl.textContent = awayScore
}

let awayScoreBtntThree = document.getElementById("away-score-btn-3")

function increaseAwayScoreThree() {
    awayScore += 3
    awayStoreEl.textContent = awayScore
}