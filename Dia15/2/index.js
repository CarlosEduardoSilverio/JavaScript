let celsius, fahren
celsius = prompt("Informe a temperatura (celsius) que deseja converter");

function resultado(celsius){
    fahren = parseFloat(celsius) * 1.8 + 32
    return alert(fahren + " Celsius");
}
resultado(celsius);