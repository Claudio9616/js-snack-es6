;

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
];
const guestsList = guests.map((guest, index) => {
    let guestsName = guest
    let place = index
    const tableName = 'Tavolo Vip' 
    return {
        tableName: tableName,
        guestsName: guestsName,
        place: place
    }
})
console.log(guestsList)