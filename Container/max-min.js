const { getData } = require('./utility')

const isMax = (data) =>
    Math.max(...data);

const isMin = (data) =>
    Math.min(...data);


//to-do
console.log(`Max value: ${isMax(getData(1, 100))}`);
console.log(`Min value: ${isMin(getData(101, 200))}`);