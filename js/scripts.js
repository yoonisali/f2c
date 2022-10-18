// buisness logic
function convertToF(celcius) {
    let farenheit = (celcius - 32)* 5/9;
    return farenheit;
}





// user interface logic
const farenheit = prompt("Enter a tempreture in farenheit:");
let convertToFResult = (farenheit - 32) * 5/9;
window.alert(convertToFResult);
