
const {getData} = require('./utility')


const getPrimeNumber = (data) => {
  let store =  data.filter(num => {
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0) return false;
        }
        return true;
    });
    return store; 
}
 
 console.log(`Prime Number: ${getPrimeNumber(getData())}`);