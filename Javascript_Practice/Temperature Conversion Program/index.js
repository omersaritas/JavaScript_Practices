const myText = document.getElementById("myText");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result")
let temp


function convert(){
    if(toFahrenheit.checked){
        temp = Number(myText.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelcius.checked){
        temp = Number(myText.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please Select a Unit"
    }
}