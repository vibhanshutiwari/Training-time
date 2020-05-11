


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