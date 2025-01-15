

const firstNumber = prompt(`Calculadora  Primeiro número`)
const operated = prompt(`Escolha a operação: +, -, *, /`)
const socondNumber = prompt(`Calculadora  Segundo número`)

switch(operated){
    case "+":
        const resultado = Number(firstNumber) + Number(socondNumber)
        alert(`${firstNumber} + ${socondNumber} = ${resultado}`)
        if(resultado % 2 === 0){
            alert(`O número ${resultado} é par`)
        }else{
            alert(`O número ${resultado} é impar`)
        }
    
        break
    case "-":

        const resultado2 = Number(firstNumber) - Number(socondNumber)
        alert(`${firstNumber} - ${socondNumber} = ${resultado2}`)
        if(resultado2 % 2 === 0){
            alert(`O número ${resultado2} é par`)
        }else{
            alert(`O número ${resultado2} é impar`)
        }
        break
    case "*":
        const resultado3 = Number(firstNumber) * Number(socondNumber)
        alert(`${firstNumber} * ${socondNumber} = ${resultado3}`)
        if(resultado3 % 2 === 0){
            alert(`O número ${resultado3} é par`)
        }else{
            alert(`O número ${resultado3} é impar`)
        }  
        break
    case "/":
        const resultado4 = Number(firstNumber) / Number(socondNumber)
        alert(`${firstNumber} / ${socondNumber} = ${resultado4}`)
        if(resultado4 % 2 === 0){
            alert(`O número ${resultado4} é par`)
        }else{
            alert(`O número ${resultado4} é impar`)
        }
        break
    default:
        alert(`Operação inválida`)
}