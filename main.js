const dragonEl = document.querySelector('.dragon-container1')
const clickEl = document.querySelector('.clicks1')

const dragon2El = document.querySelector('.dragon-container2')
const click2El = document.querySelector('.clicks2')

let clicks = 0 

dragonEl.addEventListener('click', function(e) {
        clicks += 1
        clickEl.innerText = clicks
    })

let clicks2 = 0

dragon2El.addEventListener('click', function(e) {
    clicks2 += 1
    click2El.innerText = clicks2
})
