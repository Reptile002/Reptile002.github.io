

const howMuchToPay = (event) => {
    event.preventDefault()
    let fuelCost = document.getElementById(`fuelCost`).value.replace(`,`,`.`)
    let fuelConsumption = document.getElementById(`consumption`).value.replace(`,`,`.`)
    let distance = document.getElementById(`distance`).value.replace(`,`,`.`)
    let peopleInCar = document.getElementById(`pplInCar`).value.replace(`,`,`.`)
    let result = null
    console.log(fuelCost, fuelConsumption, distance, peopleInCar)

    if(peopleInCar == 0){
        result = document.getElementById(`result`).innerHTML =`
        <p class="errorTxt"><br>
        Wprowadzone dane są nieprawidłowe
        </p>`
    }else{
    let usedFuel = fuelConsumption / 100 * distance
    let cost = [usedFuel * fuelCost, usedFuel * fuelCost / peopleInCar]
    result = document.getElementById(`result`).innerHTML =`
    <p class="costTxt"><br>
        Łączny koszt paliwa : <p class="thiccTxt">${cost[0].toFixed(2)} PLN</p><hr class ="line"> <p class ="costTxt">Cena za osobę </p> <p class="thiccTxt">${cost[1].toFixed(2)} PLN</p>
    </p>`}

    return result
}

/*
const calculateFuelConsumption = (consumedFuel, distance) => {
    let fuelConsumption = consumedFuel / distance * 100
    return fuelConsumption
}
*/
