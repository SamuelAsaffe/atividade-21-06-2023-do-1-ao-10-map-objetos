nomes = ['sivir', 'silvio santos', 'shivana', 'samuel', 'samara',
    'mathews', 'marta', 'marlon', 'mario', 'marilia', 'maria', 'maria',
    'marcelo', 'lucas', 'judas', 'joão', 'jonas', 'cirilo']
let notas = [3.5,9.3,10,]
for (let i = 0; i < nomes.length; i++) {
    notas.push((Math.random() * 10) + 1.0).toFixed(1)
}

console.log(notas)
