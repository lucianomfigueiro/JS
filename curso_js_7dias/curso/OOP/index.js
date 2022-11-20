
function CreateBook(title, author, pages){

    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
            
}

const book1 = new CreateBook ('Vida de véio', 'Arystoteles',250)


console.log(book1)

let message = 'Hey, my name is Panda!'

//String
console.log(message.startsWith('Heysdf'))
console.log(message.length)
console.log(message.includes('name'))

let firstName = 'Panda'

const email = 'Hy Panda, The meeting is confirmed'

const email2 = `Hy ${firstName}, 
The meeting is confirmed!
Caju`


console.log(email)
console.log(email2)








