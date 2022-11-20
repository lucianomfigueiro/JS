//console.log('Javascript funcionando');

let firstName = 'Luciano';
let = lastName = 'MF'
console.log(firstName);
console.log(lastName);

const price = 30;
console.log(price);

let pen = {
    itemNAme: 'pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue'

console.log(pen)

let dogs = ['Panda','Mel','Ary','Caju','Bino','Laika','Luna','Jade','Pimba']
dogs[8] = 'Polar'
console.log(dogs)

function saleStatus(status, total) {
    console.log('Transaction ' + status + '! Total amount: $' + total)
}

saleStatus('Aproved', 30)

function percentage10(price) {
    return price - (price * 10 / 100)

}

console.log(percentage10(10))

let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'
console.log(speed)