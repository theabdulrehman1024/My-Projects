function convertTemperature() {
    const userInput = parseFloat(document.getElementById('userinput').value);
    const fromUnit = document.getElementById('selectFrom').value;
    const toUnit = document.getElementById('selectTo').value;

    let result;

    
    if (fromUnit === "C" && toUnit === "F") {
        result = (userInput * 9/5) + 32;
    } else if (fromUnit === "F" && toUnit === "C") {
        result = (userInput - 32) * 5/9;
    } else {
        result = userInput; 
    }


    document.getElementById('display-temperature').innerHTML = `${result.toFixed(2)} &deg;${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}


