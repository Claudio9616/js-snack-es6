const tableName = 'Tavolo Vip';

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
const guestsList = guests.map((guest, i) => {
    return {
        nameTable: 'tableName',
        guestName: 'guests',
        place: '[i]'
    }
})
console.log(guestsList)