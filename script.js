const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

billInput.addEventListener('input', updateTip)

tipInput.addEventListener('input',  updateTip)

peopleInput.addEventListener('input',  updateTip)

function updateTip() {
    console.log("called")
    const bill = parseFloat(billInput.value)
    const tipAmount = parseInt(tipInput.value)
    const people = parseInt(peopleInput.value)
    tip = (bill*tipAmount/100)/people
    displayTip.innerHTML = tip.toFixed(2)
    updateTotal()
}

function updateTotal() {
    const bill = parseFloat(billInput.value)
    const tip = parseInt(tipInput.value)
    const people = parseInt(peopleInput.value)
    total = (bill+bill*tip/100)/people
    displayTotal.innerHTML = total.toFixed(2)

}

