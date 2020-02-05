const today = new Date();
const dayNumber = today.getDay();
const element = document.getElementById("message");
if (dayNumber == 5) {
    element.classList.add("showme");    
}
else {
    element.classList.add("hideme");
}