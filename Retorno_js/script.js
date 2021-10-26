function calcular(){
    //Dados de entrada no array
    let valores = [Number(document.getElementById("n1").value), Number(document.getElementById("n2").value), Number(document.getElementById("n3").value), Number(document.getElementById("n4").value)]
    let res = document.getElementById("res") 

    //processo e saída de dados
    let max = Math.max(...valores)

    if(valores[0] == "" || valores[0] == isNaN(valores[0])){
        alert("Por favor, preencha os campos corretamente!")
    } else if(valores[1] == "" || valores[1] == isNaN(valores[1])){
        alert("Por favor, preencha os campos corretamente!")
    } else if(valores[2] == "" || valores[2] == isNaN(valores[2])){
        alert("Por favor, preencha os campos corretamente!")
    } else if(valores[3] == "" || valores[3] == isNaN(valores[3])){
        alert("Por favor, preencha os campos corretamente!")
    }else{
        res.innerHTML = `<br>O valor maior é: <br>${max}`
        res.style.color = "white"
    }
    

}
document.getElementById("calcular").addEventListener('click', calcular)