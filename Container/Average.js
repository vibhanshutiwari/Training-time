
const {getData} = require('./utility')

const average = (data) => {
  let store = data.reduce((total , current) => total + current);
  return store / data.length ;
    }

  console.log(average(getData()));