


const { getData } = require('./utility')



// Second type ..
const linearSeach = (data, value) => {

  data.forEach((nums, index) => {
       if(nums == value) {
         newIndex = index;
       } 
   });
  return newIndex;
}  

console.log(linearSeach(getData(),20))



// linear search
const linear = (data, val) => {
  for(let i=0; i <= data.length; i++){
      if(data[i] == val) {
          return i;
      }
  }
  return null;
}

  console.log(linear(getData(),22));