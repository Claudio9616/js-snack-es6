// SNACKS1
// 1 creo una variabile per il nome del tavolo
// 2 creo un'array con il nome degli invitati
// 3 uso il metodo map per creare una lista di array di oggetti, aggiungendo
// il nome del tavolo e il numero del posto
// 4 stampo in console

// 1
const tableName = 'Tavolo Vip'
// 2
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
]
// 3
const guestsList = guests.map((guest, index) => {     
    return {
        tableName: tableName,
        guestsName: guest,
        place: index + 1
    }
})
// 4
console.log(guestsList)


// SNACKS2
// 1 creo un'array di oggetti contenenti i valori di ID, NOME e VOTI
// 2 creo una lista solo con gli studenti che hanno un voto superiore a 70
// 3 creo una lista di sudenti che hanno un voto superiore a 70 e un ID superiore a 120
// 4 creo una lista solo con i nomi degli studenti, srampati in maiuscolo
// 5 stampo in console

// 1
const students = [
    {id:'213', name: 'Marco della Rovere', vote:'78'},
    {id:'110', name: 'Paola Cortellessa', vote:'96'},
    {id:'250', name: 'Andrea Mantegna', vote:'48'},
    {id:'145', name: 'Gaia Borromini', vote:'74'},
    {id:'196', name: 'Luigi Grimaldello', vote:'68'},
    {id:'102', name: 'Piero della Francesca', vote:'50'},
    {id:'120', name: 'Francesca da Polenta', vote:'84'}
]
// 2
const over70Votes = students.filter(({vote}) => vote >= 70)
// 3
const over120Id = students.filter(student => {
    if(student.id >= 120 && student.vote >= 70){
        return true
    }
})
// 4
const names = students.map(({name}) => name.toUpperCase())
// 5
console.log(over70Votes, over120Id, names)
