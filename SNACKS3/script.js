// snacks 3
// 1 creo un'array di oggetti
// 2 creo un nuovo array e gli assegno il primo valore della mia array di oggetti
// 3 giro sulla prima array e creo una condizione per trovare la bici con il minor peso
// 4 creo la suddetta condizione
// 5 stampo in cosole
 
// 1
bicycles = [
    {name: 'cosentino', weight: 4},
    {name: 'lombardo', weight: 20},
    {name: 'bianchi', weight: 30},
    {name: 'rossi', weight: 5}
]
// 2
let lightsBike = bicycles [0]
// 3
 bicycles.forEach(bike => {
    const {weight} = bike
    // 4
    if (weight < lightsBike.weight) lightsBike = bike
 })
//  5
 console.log(lightsBike)
