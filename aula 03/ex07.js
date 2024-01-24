var agora = new Date()
var diaSem = agora.getDay()
/*
0 - Domingo
1 - segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sabado 
*/ 

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('dom')
        break //break obrigatorio
    case 1:
        console.log('seg')
        break //break obrigatorio
    case 2:
        console.log('ter')
        break //break obrigatorio
    case 3:
        console.log('qua')
        break //break obrigatorio
    case 4:
        console.log('qui')
        break //break obrigatorio
    case 5:
        console.log('sex')
        break //break obrigatorio
    case 6:
        console.log('sab')
        break //break obrigatorio
    default:
        console.log('erro dia invalido')
}