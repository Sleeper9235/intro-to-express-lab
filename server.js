const e = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello, world!')
})

//Question 1
app.get('/greeting/:userName', (req, res) => {
    const userName = req.params.userName
    res.send(`Hello there, ${userName}!, what a delight it is to see you once more!`)
})

//Question 2
app.get('/roll/:diceRoll', (req, res) => {
    const roll = req.params.diceRoll
    if (isNaN(roll)) {
        res.send(`You must specify a number`)
    } else {
        res.send(`You rolled a ${roll}`)
        
    }
})

//Question 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:idx', (req, res) => {
    let idx = req.params.idx
    let name = collectibles[idx].name
    let price = collectibles[idx].price

        if (idx == 0) {
        res.send(`So, you want the ${name}? For ${price}, it can be yours!`)
        } else if (idx == 1) {
            res.send(`So, you want the ${name}? For ${price}, it can be yours!`)
        } else if (idx == 2) {
            res.send(`So, you want the ${name}? For ${price}, it can be yours!`)
        } else {
            res.send('This item is not yet in stock. Check back soon')
        }
})

//Question 4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const sortMinPrice = req.query.min
    const sortMaxPrice = req.query.max
    const sortType = req.query.type

    if (sortType) {
        let sortedByType = shoes.filter(shoe => shoe.type == sortType);
        for (let i of sortedByType) {res.send(sortedByType)}       
    } else if (sortMinPrice) {
        let sortedByMinPrice = shoes.filter(shoe => shoe.price >= sortMinPrice)
        for (let i of sortedByMinPrice) {res.send(sortedByMinPrice)}
        res.send(shoes.filter(sortedByMinPrice))
    } else if (sortMaxPrice) {
        let sortedByMaxPrice = shoes.filter(shoe => shoe.price <= sortMaxPrice)
        for (let i of sortedByMaxPrice) {res.send(sortedByMaxPrice)}
        res.send(shoes.filter(sortedByMaxPrice))
    } else {
        res.send(shoes)
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})