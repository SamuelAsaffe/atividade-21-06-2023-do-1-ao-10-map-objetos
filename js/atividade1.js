nomes = ['sivir', 'silvio santos', 'shivana', 'samuel', 'samara',
    'mathews', 'marta', 'marlon', 'mario', 'marilia', 'maria', 'maria',
    'marcelo', 'lucas', 'judas', 'joão', 'jonas', 'cirilo']
let notas = [3.5,9.3,10,4.3,5.6,7.9,10.0,4.6,7.5,6.0,3.7,9.8,6.4,5.3,9.2,6.7,6.6,8.3]
let magico=[]
for (let i = 0; i < nomes.length; i++) {
    // notas.push((Math.random() * 10) + 1.0).toFixed(1)
    aluno= {
    "nome: ": nomes[i],
    "nota: ": notas[i],
    "situacao: ": notas[i] >= 7.0 ? "Aprovado" : "Reprovado"}
    magico.push(aluno);
    
}

console.log(magico)
// console.log(notas.length)
// console.log(nomes.length)
// console.log(notas)
