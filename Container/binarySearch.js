
const { getData } = require('./utility')



const binarySearch = (data, nums) => {
  store = data.sort();

  let indexMin = 0;
  let indexMax = store.length - 1;

  while (indexMin <= indexMax) {

    let indexmid = Math.floor((indexMin + indexMax) / 2);

    if (store[indexmid] == nums) {
      return mid;

    } else if (store[indexmid] < nums) {
      indexMin = indexmid + 1;
    } else {
      indexMax = indexmid - 1;
    }
  } return null;
}

console.log(binarySearch(getData(),32));

