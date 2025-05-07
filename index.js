let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

let currentPeriodEl = document.getElementById("current-period")
let currentPeriod = 1

let homeFoulEl = document.getElementById("home-foul-score")
let homeFoulCount = 0

let guestFoulEl = document.getElementById("guest-foul-score")
let guestFoulCount = 0

function incrementHomeBy1() {
    homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore
}

function incrementHomeBy2() {
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore
}

function incrementHomeBy3() {
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore
}

function incrementGuestBy1() {
    guestScore = guestScore + 1
    guestScoreEl.textContent = guestScore
}

function incrementGuestBy2() {
    guestScore = guestScore + 2
    guestScoreEl.textContent = guestScore
}

function incrementGuestBy3() {
    guestScore = guestScore + 3
    guestScoreEl.textContent = guestScore
}

function incrementPeriodBy1() {
    currentPeriod = currentPeriod + 1
    currentPeriodEl.textContent = currentPeriod
}

function decrementPeriodBy1() {
    currentPeriod = currentPeriod - 1
    currentPeriodEl.textContent = currentPeriod
}

function incrementHomeFoulBy1() {
    homeFoulCount = homeFoulCount + 1
    homeFoulEl.textContent = homeFoulCount
}

function decrementHomeFoulBy1() {
    homeFoulCount = homeFoulCount - 1
    homeFoulEl.textContent = homeFoulCount
}

function incrementGuestFoulBy1() {
    guestFoulCount = guestFoulCount + 1
    guestFoulEl.textContent = guestFoulCount
}

function decrementGuestFoulBy1() {
    guestFoulCount = guestFoulCount - 1
    guestFoulEl.textContent = guestFoulCount
}


