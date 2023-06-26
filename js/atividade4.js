// 4) crie um mapa(objeto mapa) a partir do seu array de objetos.

let nomes = ['sivir', 'silvio santos', 'shivana', 'samuel', 'samara',
    'mathews', 'marta', 'marlon', 'mario', 'marilia', 'maria', 'maria',
    'marcelo', 'lucas', 'judas', 'joão', 'jonas', 'cirilo']
let notas = [3.5, 9.3, 10, 4.3, 5.6, 7.9, 10.0, 4.6, 7.5, 6.0, 3.7, 9.8, 6.4, 5.3, 9.2, 6.7, 6.6, 8.3]
let alunoM = {}
let alunoA = []
//let maca = {}
for (let i = 0; i < nomes.length; i++) {
    // notas.push((Math.random() * 10) + 1.0).toFixed(1)
    alunoM = {
        nome: nomes[i],
        nota: notas[i],
        // tarefa 3 com o operador ternário {
        situacao: notas[i] >= 7.0 ? "Aprovado" : "Reprovado"
        //}
    }
    alunoA.push(alunoM);

}
//   tarefa 1
// console.log(alunoA)
// console.log(JSON.stringify(alunoA, null, 2));
// console.log(notas.length)
// console.log(nomes.length)
// console.log(notas)

//   tarefa 2
// alunoA.forEach((alunoM)=>console.log(alunoM["nome"]))
// function somenteNomesA() {
//     for (let i = 0; i < nomes.length; i++) {
//         console.log(alunoA[i]["nome"])
//     }
// }
// somenteNomesA()


//    terefa 4
let alunosMM = {}
for (let i =0;i <nomes.length;i++) {
    let chave= "aluno " + (i +1)
    alunosMM[chave] = alunoA[i]
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
// E :{ nome: 'samara', nota: 5.6, situacao: 'Reprovado' },
// F :{ nome: 'mathews', nota: 7.9, situacao: 'Aprovado' },
// G :{ nome: 'marta', nota: 10, situacao: 'Aprovado' },
// H :{ nome: 'marlon', nota: 4.6, situacao: 'Reprovado' },
// I :{ nome: 'mario', nota: 7.5, situacao: 'Aprovado' },
// J :{ nome: 'marilia', nota: 6, situacao: 'Reprovado' },
// K :{ nome: 'maria', nota: 3.7, situacao: 'Reprovado' },
// L :{ nome: 'maria', nota: 9.8, situacao: 'Aprovado' },
// M :{ nome: 'marcelo', nota: 6.4, situacao: 'Reprovado' },
// N :{ nome: 'lucas', nota: 5.3, situacao: 'Reprovado' },
// O :{ nome: 'judas', nota: 9.2, situacao: 'Aprovado' },
// P :{ nome: 'joão', nota: 6.7, situacao: 'Reprovado' },
// Q :{ nome: 'jonas', nota: 6.6, situacao: 'Reprovado' },
// R :{ nome: 'cirilo', nota: 8.3, situacao: 'Aprovado' }
// }