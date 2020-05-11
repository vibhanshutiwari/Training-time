
const {falsyRemove} = require('./utility')



const removeFalsyValue = (Data) => {
  let store =  Data.filter(Boolean);
  return store;
}

console.log(removeFalsyValue(falsyRemove()));
