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

