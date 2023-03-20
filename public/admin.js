
// Your Code Here


async function main() {

    let response = await fetch('http://localhost:3001/listBooks')

    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root')
    //Step 1: Create an element to make a list for book titles
    
    let li = document.createElement('li')
    li.textContent = book.title

    //Step 2: Create the elements to list the book quantities

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    //Step 3: Create the elements to save using a button - you will need textContext

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    //Step 4: Create the event listener click, then fetch URL then Patch to update book id and quantity

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.append(li)
}


main();