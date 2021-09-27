const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')
const displayEachH1 = document.querySelector('#display-each-h1')
const displayEachP = document.querySelector('#display-each')

billInput.addEventListener('input', updateTip)

tipInput.addEventListener('input',  updateTip)

peopleInput.addEventListener('input',  updateTip)

function updateTip() {
    console.log("called")
    const bill = parseFloat(billInput.value)
    const tipAmount = parseInt(tipInput.value)
    const people = parseInt(peopleInput.value)
    tip = (bill*tipAmount/100)
    displayTip.innerHTML = tip.toFixed(2)
    updateTotal(bill, tipAmount, people)
}

function updateTotal(bill, tip, people) {
    total = (bill+bill*tip/100)
    displayTotal.innerHTML = total.toFixed(2)

    if (people > 1) {
        displayEach(bill, tip, people)
    }
}

function displayEach(bill, tip, people) {
    each = (bill+bill*tip/100)/people
    if (people > 1){
        displayEachH1.innerHTML = "Each"
        displayEachP.innerHTML = each.toFixed(2)
    } else {
        displayEachH1.innerHTML = ""
        displayEachP.innerHTML = ""
    }
}

