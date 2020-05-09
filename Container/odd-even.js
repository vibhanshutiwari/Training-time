const {getData} = require('./utility')


const getEvenNumber = (data) =>
  data.filter(num => num % 2 == 0);

const getOddNumber = (data) =>
  data.filter(num => num % 2 == 1);


//to-do
console.log(`Odds: ${getOddNumber(getData())}`);
console.log(`Evens: ${getEvenNumber(getData())}`);