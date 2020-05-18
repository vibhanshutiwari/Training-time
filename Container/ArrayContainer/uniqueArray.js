
const {getData} = require('./utility')


const arrayUnique = (data) => {

   let unique =  new Set(data);

   return unique;
}

console.log(arrayUnique(getData()));



const duplicateRemove = (data) => {
   let unique = [];
  data.forEach(num => {
      if(!unique.includes(num)) {
          unique.push(num);
      }
      
  });

  return unique;
}   
