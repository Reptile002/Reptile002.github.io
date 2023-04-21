

const howMuchToPay = (event) => {

    event.preventDefault()
    let fuelCost = document.getElementById(`fuelCost`).value.replace(`,`,`.`)
    let fuelConsumption = document.getElementById(`consumption`).value.replace(`,`,`.`)
    let distance = document.getElementById(`distance`).value.replace(`,`,`.`)
    let peopleInCar = document.getElementById(`pplInCar`).value
    let result

    if(peopleInCar == 0 || fuelCost == 0 || fuelConsumption == 0 || distance == 0){

        result = document.getElementById(`err`).innerHTML =`<p class="errorTxt"><br>Wprowadzone dane są nieprawidłowe</p>`,
        result = document.getElementById(`result`).innerHTML =``

    }else if(peopleInCar == 1){

        let usedFuel = fuelConsumption / 100 * distance
        let cost = [usedFuel * fuelCost, usedFuel * fuelCost / peopleInCar]

        result = document.getElementById(`result`).innerHTML =`<p class="costTxt">Łączny koszt paliwa : <p class="thiccTxt">${cost[0].toFixed(2)} PLN</p>`,
        result = document.getElementById(`err`).innerHTML =``

    }else{

        let usedFuel = fuelConsumption / 100 * distance
        let cost = [usedFuel * fuelCost, usedFuel * fuelCost / peopleInCar]

        result = document.getElementById(`result`).innerHTML =`
        <p class="costTxt">Łączny koszt paliwa : <p class="thiccTxt">${cost[0].toFixed(2)} PLN</p><hr class ="line"> <p class ="costTxt">Cena za osobę </p> <p class="thiccTxt">${cost[1].toFixed(2)} PLN</p></p>`,
        result = document.getElementById(`err`).innerHTML =``

    }

    return result
}

