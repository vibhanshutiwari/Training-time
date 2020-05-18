
const { getData } = require('./Container/utility')


// 2 divide max value
const divide = (data) => {
    let max = 0;
    for(let i =0; i <= data.length; i++) {
        if(data[i] % 2 == 0 && data[i] > max) {
            max = data[i];
        } 
    }
    return max;
}

   console.log(divide(getData()));