
const { getData } = require('./utility')



const clone = (data) => {
    let NewData = [...data];

      return NewData;
      
}

 console.log(clone(getData()));


