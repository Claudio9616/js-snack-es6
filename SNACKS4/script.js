// snacks 4
// 1 creo un'array di oggetti 
// 2 creo un ciclo per girare sulla suddetta array e randomizzare tot di volte dei numeri random
// 3 creo una nuova array solamente con col nome e i falli subiti
// 4 stampo in console

// 1
const premierLeague = [
    {name: 'Chelsea', points: 0, fouls: 0},
    {name: 'Arsenal', points: 0, fouls: 0},
    {name: 'Manchester City', points: 0, fouls: 0},
    {name: 'Manchester United', points: 0, fouls: 0},
    {name: 'Liverpool', points: 0, fouls: 0}   
]
// 2
premierLeague.forEach(clubsRandom => {
    clubsRandom.points = Math.floor(Math.random() * 100) + 1
    clubsRandom.fouls = Math.floor(Math.random() * 100) + 1
})
// 3
const newPremierLeague = premierLeague.map(({name, fouls}) => {
    return {
        name,
        fouls
    }
})
// 4
console.log(newPremierLeague)
