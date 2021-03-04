var botao = document.getElementById("calculaImc");

document.querySelector("#resultado").style.visibility = "hidden"

botao.addEventListener("click", function(){
    var peso = document.querySelector("#peso");
    var altura = document.querySelector("#altura");

    if ( parseFloat(peso.value) != 0 && parseFloat(altura.value) != 0){
        var resultado = parseFloat(peso.value) / parseFloat(altura.value * altura.value);

        var imc = document.querySelector("#resultado").innerHTML = "Imc" + " " + parseFloat(resultado * 10000).toFixed(2) + " " + "%";

        document.querySelector("#resultado").style.visibility = "visible"
        
        
    } else {
        var imc =  window.alert("Os valores são inválidos");
        
    }
    
    
}
)

