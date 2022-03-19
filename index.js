let input = document.querySelector(".input");

input.addEventListener('input', convert)
input.addEventListener('input', limitCharacters)



function convert () {
    let conversionValue = input.value;
    let metricToImperialLength = conversionValue * 3.281
    let metricToImperialMass = conversionValue * 2.205
    let metricToImperialVolume = conversionValue / 3.78541
    let ImperialToMetricLength = conversionValue / 3.281
    let ImperialToMetricVolume = conversionValue * 3.78541
    let ImperialToMetricMass = conversionValue / 2.205
    
    
    document.getElementById("length-unit").textContent = conversionValue + " meters = " + metricToImperialLength.toFixed(3) + " feet | " + conversionValue + " feet = " + ImperialToMetricLength.toFixed(3) + " meters";
    
    document.getElementById("volume-unit").textContent = conversionValue + " liters = " + metricToImperialVolume.toFixed(3) + " gallons | " + conversionValue + " gallons = " + ImperialToMetricVolume.toFixed(3) + " liters";
    
    document.getElementById("mass-unit").textContent = conversionValue + " kilos = " + metricToImperialMass.toFixed(3) + " pounds | " + conversionValue + " pounds = " + ImperialToMetricMass.toFixed(3) + " kilos";
    
}

function limitCharacters() {
    if (input.value.length > 6) {
        input.value = input.value.slice(0,6);
    }

}

