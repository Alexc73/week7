const express = require("express")
const app = express()

// app.use("/books", express.static("books"))
// app.use("/", express.static("Anotherroute"))
// app.use("/music", express.static("Music"))
// app.use("/movies", express.static("Movies"))

app.use (express.json())

app.get('/book', (request, response) => {
    const book = {
        title:"Lord of the Rings",
        author:"Tolkein",
        genre:"fantasy"
    }
    const successResponse = {
        message: "Response sent successfully",
        book: book
    }
    response.send(successResponse)
    // response.send("Hello from the book route")
})

app.get('/Anotherroute', (request, response) => {
    response.send("Hello from another route")
})

app.post("/book", (request, response) => {
    console.log(request.body)
    const newBook = {
        id: "1234",
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }
    const successSendResponse = {
        message: "Response sent successfully",
        book: newBook
    }
    response.send(successSendResponse)
    // response.send("Hello from the book route")
})

app.put("/book/:id", (request, response) => {
    const bookId = request.params.id 
    const updatedBook = {
        id: bookId,
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }
    const successUpdateResponse = {
        message: "Book updated successfully",
        book: updatedBook
    }
    response.send(successUpdateResponse)
})

app.delete("/book/:id", (request, response) => {
    const bookId = request.params.id 
    const successDeleteResponse = {
        message: `Book with id ${bookId} deleted successfully`
    }
    response.send(successDeleteResponse)
})
    // response.send("Hello from the post route")
app.listen(5001, () => console.log("Server is listening"))