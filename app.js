
//created array of animals
const animalCards = [
    {
        name: 'cow',
        legs: '4',
        type: 'wild',
        color: 'varies',
    },
    {
        name: 'goat',
        legs: '4',
        type: 'domestic',
        color: 'varies',
    },
    {
        name: 'dog',
        legs: '4',
        type: 'domestic',
        color: 'varies',
    },
    {
        name: 'lion',
        legs: '4',
        type: 'wild',
        color: 'varies',
    },
    {
        name: 'antelope',
        legs: '4',
        type: 'wild',
        color: 'varies',
    },
    {
        name: 'gazelle',
        legs: '4',
        type: 'wild',
        color: 'varies',
    },
    {
        name: 'cat',
        legs: '4',
        type: 'domestic',
        color: 'varies',
    },
    {
        name: 'tiger',
        legs: '4',
        type: 'wild',
        color: 'varies',
    },

]

let animalCard = document.querySelector('#animal-card')

let html = ''
animalCards.forEach(animal =>{
    let{name, legs, type, color} = animal
    html += `
    <div id="animal-card">
        <div id="card-body">
            <h3>Name:${name}</h3>
            <h3>Legs:${legs}</h3>
            <h3>Type:${type}</h3>
            <h3>Color:${color}</h3>
        </div>
    </div>
    `
    animalCard.innerHTML = html
})

let x = "I love pizza"
console.log(x)

x.slice(7,12)
let slice = (x.slice(7, 12))
console.log(slice)

console.log(x.replace('pizza', 'Kung fu'))


let fruits = ["Mango", "Orange", "Banana"]
console.log(fruits)

fruits.push('Lemon')
console.log(fruits.push)

let y = 19.80
console.log(y)
console.log(y.toFixed(19.80))

let z = 45.90
console.log(z.valueOf(45.90))
