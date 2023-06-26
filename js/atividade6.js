// 5) utilize o metodo get() para obter a nota do 5º elemento do mapa.

let nomes = ['sivir', 'silvio santos', 'shivana', 'samuel', 'samara',
    'mathews', 'marta', 'marlon', 'mario', 'marilia', 'maria', 'maria',
    'marcelo', 'lucas', 'judas', 'joão', 'jonas', 'cirilo']
let notas = [3.5, 9.3, 10, 4.3, 5.6, 7.9, 10.0, 4.6, 7.5, 6.0, 3.7, 9.8, 6.4, 5.3, 9.2, 6.7, 6.6, 8.3]
let alunoO = {}
let alunoA = []
//let maca = {}
for (let i = 0; i < nomes.length; i++) {
    // notas.push((Math.random() * 10) + 1.0).toFixed(1)
    alunoO = {
        nome: nomes[i],
        nota: notas[i],
        // tarefa 3 com o operador ternário {
        situacao: notas[i] >= 7.0 ? "Aprovado" : "Reprovado"
        //}
    }
    alunoA.push(alunoO);

}
//   tarefa 1
// console.log(alunoA)
// console.log(JSON.stringify(alunoA, null, 2));
// console.log(notas.length)
// console.log(nomes.length)
// console.log(notas)

//   tarefa 2
// alunoA.forEach((alunoO)=>console.log(alunoO["nome"]))
// function somenteNomesA() {
//     for (let i = 0; i < nomes.length; i++) {
//         console.log(alunoA[i]["nome"])
//     }
// }
// somenteNomesA()

//    terefa 4
let alunosMM = new Map()
for (let i =0;i <nomes.length;i++) {
    let chave= "aluno " + (i +1)
    alunosMM.set(chave , alunoA[i])
}


// console.log(alunosMM)
// for (let i =0;i <nomes.length;i++) {
//     let chave = String.fromCharCode(65 + i)
//     alunosMM[chave] = alunoA[i]
// }
//mostra da seguinte maneira
// {
// A :{ nome: 'sivir', nota: 3.5, situacao: 'Reprovado' },
// B :{ nome: 'silvio santos', nota: 9.3, situacao: 'Aprovado' },
// C :{ nome: 'shivana', nota: 10, situacao: 'Aprovado' },
// D :{ nome: 'samuel', nota: 4.3, situacao: 'Reprovado' },
// ....
// }


// tarefa 5 


console.log(alunosMM.get("aluno 5").nota)