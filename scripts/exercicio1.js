// console.log("batata") UM APARECE SO NO CONSOLE 
// alert("frita") // APARECE NA TELA PARA USUARIO
// prompt("123") // APARECE NA TELA E PEDE ALGO PRO USUARIO 

// document.getElementById("rodape")

const buttonEx1 = document.getElementById("exercicio1")

buttonEx1.addEventListener ("click", () => {
    const num1 = Number(prompt("Informe um número"))
    const num2 = Number(prompt("Informe outro número"))
    // const soma = num1 + num2
    // alert(soma)
    alert (num1+num2)
})