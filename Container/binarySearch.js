
const { getData } = require('./utility')



const binarySearch = (data, nums) => {
  store = data.sort();
  let indexMin = 0;
  let indexMax = store.length - 1;

  while (indexMin <= indexMax) {

    let mid = Math.floor((indexMin + indexMax) / 2);

    if (store[mid] == nums) {
      return mid;

    } else if (store[mid] < nums) {
      indexMin = mid + 1;
    } else {
      indexMax = mid - 1;
    }
  } return null;
}

console.log(binarySearch(getData(), 32));

