//   2) percorra o array dos objetos e exiba apenas o nome dos alunos.

let nomes = ['sivir', 'silvio santos', 'shivana', 'samuel', 'samara',
    'mathews', 'marta', 'marlon', 'mario', 'marilia', 'maria', 'maria',
    'marcelo', 'lucas', 'judas', 'joão', 'jonas', 'cirilo']
let notas = [3.5, 9.3, 10, 4.3, 5.6, 7.9, 10.0, 4.6, 7.5, 6.0, 3.7, 9.8, 6.4, 5.3, 9.2, 6.7, 6.6, 8.3]
let alunoM = {}
let alunoA = []

for (let i = 0; i < nomes.length; i++) {
    // notas.push((Math.random() * 10) + 1.0).toFixed(1)    criar notas aleatórias
    alunoM = {
        nome: nomes[i],
        nota: notas[i],
        // situacao: notas[i] >= 7.0 ? "Aprovado" : "Reprovado"
    }
    alunoA.push(alunoM);

}
//   tarefa 1
console.log(alunoA)
// console.log(notas.length)
// console.log(nomes.length)
// console.log(notas)

//   tarefa 2
alunoA.forEach((alunoM)=>console.log(alunoM["nome"]))
// function somenteNomesA() {
//     for (let i = 0; i < nomes.length; i++) {
//         console.log(alunoA[i]["nome"])
//     }
// }
// somenteNomesA()




