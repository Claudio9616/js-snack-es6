// snacks 3
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
 
bicycles = [
    {name: 'cosentino', weight: 10},
    {name: 'lombardo', weight: 20},
    {name: 'bianchi', weight: 30},
    {name: 'rossi', weight: 5}
]
const minWeight = bicycles.find(({weight}) => weight === 5)
console.log(minWeight)

