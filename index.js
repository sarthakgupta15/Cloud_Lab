const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port = 8080
const fs = require("fs");
let data = fs.readFileSync("file.json","utf-8")
data = JSON.parse(data)
books = data["books"]
console.log(books)


// books =[
//     {
//     "id":1,
//     "title": "To_Kill_a_Mockingbird",
//     "author": "Harper_Lee",
//     "publication_year": 1960,
//     "cost": 10.99
//     },
//     {
//     "id":2,
//     "title": "1984",
//     "author": "George_Orwell",
//     "publication_year": 1949,
//     "cost": 9.99
//     },
//     {
//     "id":3,
//     "title": "The_Great_Gatsby",
//     "author": "F._Scott_Fitzgerald",
//     "publication_year": 1925,
//     "cost": 11.99
//     },
//     {
//     "id":4,
//     "title": "Pride_and_Prejudice",
//     "author": "Jane_Austen",
//     "publication_year":1813,
//     "cost":8.99
//     },
//     {
//     "id":5,
//     "title": "The_Catcher_in_the_Rye",
//     "author": "J.D._Salinger",
//     "publication_year":1951,
//     "cost":12.99
//     }
//     ]

let count = 5
    
app.get("/",(req,res)=>{
    res.send("hi")
})

app.get("/books",(req,res)=>{
    res.send(books)
})

app.get("/book/:id/",(req,res)=>{
    let id = req.params.id
    console.log(id)
    book = books.filter((e)=>{
        return e.id==id
    })
    res.send(book)
})

app.post("/book/",(req,res)=>{
    let body = req.body
    count ++
    let n = {
        "id":count,
        "title":body.title,
        "author":body.author,
        "publication_year":body.publication_year,
        "cost":body.cost
    }

    books.push(n)
    res.send(books)
})

app.put("/book/:id/",(req,res)=>{
    let id = req.params.id
    console.log(id)
    let body = req.body
    for(let i =0;i<books.length;i++)
    {   
        if(books[i].id==id)
        {
            books[i].title = body.title
            books[i].author = body.author
            books[i].publication_year = body.publication_year
            books[i].cost = body.cost
            break
        }
    }
    res.send(books)
})


app.delete("/book/:id/",(req,res)=>{
    let id = req.params.id
    console.log(id)
    books = books.filter((e)=>{
        return e.id!=id
    })
    res.send(books)
})

app.use((req,res) => {
    res.send("ERROR: Not found")
})

app.listen(port, () => {
    console.log("Server listens at port " + port);
});
// app.listen(port,()=>{
//     console.log(server `${port}`)
// })