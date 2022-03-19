
function convert () {
    let conversionNumber = document.getElementById('conversion-input').value;
    let metricToImperialLength = conversionNumber * 3.281
    let metricToImperialMass = conversionNumber * 2.205
    let metricToImperialVolume = conversionNumber / 3.78541
    let ImperialToMetricLength = conversionNumber / 3.281
    let ImperialToMetricVolume = conversionNumber * 3.78541
    let ImperialToMetricMass = conversionNumber / 2.205

    
    document.getElementById("length-unit").textContent = conversionNumber + " meters = " + metricToImperialLength.toFixed(3) + " feet | " + conversionNumber + " feet = " + ImperialToMetricLength.toFixed(3) + " meters";
    
    document.getElementById("volume-unit").textContent = conversionNumber + " liters = " + metricToImperialVolume.toFixed(3) + " gallons | " + conversionNumber + " gallons = " + ImperialToMetricVolume.toFixed(3) + " liters";

    document.getElementById("mass-unit").textContent = conversionNumber + " kilos = " + metricToImperialMass.toFixed(3) + " pounds | " + conversionNumber + " pounds = " + ImperialToMetricMass.toFixed(3) + " kilos";

}

document.getElementById("conversion-input").oninput = function limitCharacters() {
    if (this.value.length > 6) {
        this.value = this.value.slice(0,6)
    }
}