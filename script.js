/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/
let student = []
function Person(name, n1, n2) {
    this.name = name
    this.n1 = n1
    this.n2 = n2
}

function isNumber(grade){
    let test
    grade = Number(grade)
    test = isNaN(grade)
    while(grade>10 || grade<0 || test === true){
        grade = prompt("Nota invalida, escreva uma nota valida")
        grade = Number(grade)
        test = isNaN(grade)    
    }
    return grade
}

function averageCalculator(n1, n2){
    let average = (n1 + n2)/2
    return average
}

let num = prompt("Numero de estudantes")

for(index = 0; index<num; index++){
    let textNum = index + 1
    student[index] = new Person(
        prompt("Nome do estudante numero " + textNum), 
        isNumber(prompt("Nota 1 do estudante numero " + textNum)), 
        isNumber(prompt("Nota 2 do estudante numero " + textNum)),
    )
    student[index].average = averageCalculator(student[index].n1, student[index].n2)
}
for(index = 0; index<num; index++){
    student[index].average = student[index].average.toFixed(2)
    if(student[index].average >= 7){
        alert("Parabéns " + student[index].name + " você passou!!! \nSua média foi de: " +  student[index].average )
    }
    else{
        alert("Que pena " + student[index].name + ", se dedique mais ano que vem.\nSua média foi de: " +  student[index].average)
    }  
}