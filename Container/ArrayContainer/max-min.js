const { getData } = require('./utility')

const isMax = (data) =>
    Math.max(...data);

const isMin = (data) =>
    Math.min(...data);


//to-do
console.log(`Max value: ${isMax(getData(1, 100))}`);
console.log(`Min value: ${isMin(getData(101, 200))}`);



// max value 
const isMax = (data) => {
    let max = 0;
    for(let i=0; i<= data.length; i++) {
        if(data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
  
   console.log(isMax(getData()));