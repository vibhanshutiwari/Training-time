
const {getData} = require('./utility')


const arrayUnique = (data) => {

   let unique =  new Set(data);

   return unique;
}

console.log(arrayUnique(getData()));
