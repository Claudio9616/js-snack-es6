// snacks 4
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
const premierLeague = [
    {name: 'Chelsea', points: 0, fouls: 0},
    {name: 'Arsenal', points: 0, fouls: 0},
    {name: 'Manchester City', points: 0, fouls: 0},
    {name: 'Manchester United', points: 0, fouls: 0},
    {name: 'Liverpool', points: 0, fouls: 0}   
]
let randomPoints;
let randomFouls;
const newPremierLeague = premierLeague.map(({name}) => {
    return name
})
console.log(newPremierLeague, 'primo map')



newPremierLeague.forEach(clubsRandom => {
    randomPoints = Math.floor(Math.random() * 100) + 1
    randomFouls = Math.floor(Math.random() * 100) + 1
    console.log('randomPoints: ', randomPoints)
    console.log('randomFouls: ', randomFouls)
    newPremierLeague.push(randomFouls)
})
console.log(newPremierLeague, 'secondo')


const finalPremierLeague = newPremierLeague.map(({name}) => {
    return {
        name: name
    }
})
console.log(finalPremierLeague)
