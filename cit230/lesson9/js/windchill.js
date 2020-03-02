function windChill() {
    let temp = parseFloat(document.getElementById('temp').innerText);
    let speed = parseFloat(document.getElementById('speed').innerText);

    if (temp <= 50 && speed > 3) {
        let factor = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
        document.getElementById('windchill').innerHTML = factor;
    }
    else {
        document.getElementById('windchill').innerHTML = "N/A";
    }  
}