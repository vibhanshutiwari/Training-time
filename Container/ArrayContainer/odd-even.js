const {getData} = require('./utility')



//even value   
const isEven = (data) => {
  let arr = [];
   for(let i = 0; i <= data.length; i++) {
       if(data[i] % 2 == 0) {
            arr.push(i);
       }
   }
   return arr;
}
  
console.log(isEven(getData()));




const getEvenNumber = (data) =>
  data.filter(num => num % 2 == 0);

const getOddNumber = (data) =>
  data.filter(num => num % 2 == 1);


//to-do
console.log(`Odds: ${getOddNumber(getData())}`);
console.log(`Evens: ${getEvenNumber(getData())}`);