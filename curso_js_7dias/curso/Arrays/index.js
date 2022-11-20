

let dogs = ['Mel', 'Bino', 'Caju', 'Ary']
console.log(dogs)

const num = [7,8,9]
console.log(num)

num.push(10,11) //add no final do Array
console.log(num)

num.unshift(1,2) //add no inicio co Array
console.log(num)

num.splice(2, 0, 3, 4, 5) //add no meio do Array
console.log(num)

console.log(num.indexOf(4)) //informa em qual indx está o dado procurado
console.log(num.includes(4))

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Ratimbum'},
    {id: 3, movieName: 'Castle black'}
]

console.log(movies)
console.log(movies.find(function(movie){
    return movie.movieName == 'Dejavu'
}))

console.log(movies.find(movie => movie.movieName == 'Dejavu')) //Arrow function

console.log(num)

let final = num.pop() //remove o ultimo item 
let inicio = num.shift() //remove o primeiro item
let meio = num.splice(2, 3) //remove um item no meio do array. 

console.log(num)
console.log(final)
console.log(inicio)
console.log(meio)

const num2 = [1, 2, 3, 4, 5]
console.log(num2)
//num2.length = 0
let removeTudo = num2.splice(0, num2.length)
console.log(num2)

let numbers = [1, 2, 3, 4, 5]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) //juntando duas Arrays

console.log(all)

half = all.slice(4, 6)
console.log(half)

let clients = ['Luciano', 'João', 'Cajuru']
console.log(clients)

let clientsJoin = clients.join(', ') //transforma a Array em uma String
console.log(clientsJoin)

console.log(clients.sort()) //organiza em ordem alfabetica ou crescente se for numeros
console.log(clients.reverse()) //faz o reverso do que estava

const tempLondon = [18, 13 , 8, -2]

const tempPositive = tempLondon.every(function(value){ //verifica se todas as temperaturas são positivas dentro do temLondon
    return value >= 0
})

console.log(tempPositive)

const tempPositive2 = tempLondon.filter(value => value >= 0) //retorna as temperaturas são positvas 
    
console.log(tempPositive2)





