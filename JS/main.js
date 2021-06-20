var manoform = document.forms["input"];
manoform.addEventListener("submit", function(e){
    e.preventDefault();
    var saskaita = +manoform["saskaita"].value;
    console.log(saskaita);
    var aptarnavimas = +manoform["aptarnavimas"].value;
    console.log(aptarnavimas);
    var zmones = +manoform["zmones"].value;
    console.log(zmones);
    var suma = saskaita / 100 * aptarnavimas / zmones;
    suma = suma.toFixed(2);
    console.log(suma);
    document.getElementById("suma").textContent = suma + "  Eur";
    var apacia = document.getElementById("rezultatas");
    apacia.classList.add("rodyti");
})
