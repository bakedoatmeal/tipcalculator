const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const displayEachH1 = document.querySelector('#display-each-h1')
const displayEachP = document.querySelector('#display-each')
const addPeople = document.querySelector('#add-people')
const subtractPeople = document.querySelector('#subtract-people')
const addTip = document.querySelector('#add-tip')
const subtractTip = document.querySelector('#subtract-tip')



billInput.addEventListener('input', updateTip)

tipInput.addEventListener('input',  updateTip)

peopleInput.addEventListener('input',  updateTip)

addPeople.addEventListener('click',  addPressed)

addTip.addEventListener('click',  addPressed)

subtractTip.addEventListener('click',  subtractPressed)

subtractPeople.addEventListener('click',  subtractPressed)

function updateTip() {
    const bill = parseFloat(billInput.value)
    const tipAmount = parseInt(tipInput.value)
    const people = parseInt(peopleInput.value)
    console.log('people: ', people)
    tip = (bill*tipAmount/100)
    displayTip.innerHTML = tip.toFixed(2)
    updateTotal(bill, tipAmount, people)
}

function updateTotal(bill, tip, people) {
    console.log("update total called! ", people)
    total = (bill+bill*tip/100)
    displayTotal.innerHTML = total.toFixed(2)

    if (people >= 1) {
        displayEach(bill, tip, people)
    }
}

function displayEach(bill, tip, people) {
    console.log("displayEach called! ", people)
    each = (bill+bill*tip/100)/people
    if (people > 1){
        console.log("whatttt")
        displayEachH1.innerHTML = "Each"
        displayEachP.innerHTML = each.toFixed(2)
    } else if (people == 1) {
        console.log("IN THE LAST PLACE!")
        displayEachH1.innerHTML = ""
        displayEachP.innerHTML = ""
    }
}

function addPressed (e) {
    if (e.target.classList.contains('tip')){
        newValue = parseInt(tipInput.value) + 1
        tipInput.value = newValue
        //console.log(tipInput.value)
    }
    else if (e.target.classList.contains('people')) {
        newValue = parseInt(peopleInput.value) + 1
        peopleInput.value = newValue
        //console.log(peopleInput.value)
    }
        


    updateTip()
}

function subtractPressed (e) {
    if (e.target.classList.contains('tip')){
        newValue = parseInt(tipInput.value) - 1
        tipInput.value = newValue
        //console.log(tipInput.value)
    }
    else if (e.target.classList.contains('people')) {
        newValue = parseInt(peopleInput.value) - 1
        peopleInput.value = newValue
        console.log(peopleInput.value)
    }
    updateTip()
}

