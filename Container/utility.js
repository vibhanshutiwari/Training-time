
const getData = (start = 10, end = 50) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}


const stringArray = () => {
  let fruitlist =
    [
      'cherry', 'orange', 'apple'
    ];
  return fruitlist;
}


const falsyRemove = () => {
   let falsyValue = 
   [
      1, '', undefined, 0, ``, false, 'shubham', NaN, 10
   ];
   return falsyValue ;
}


module.exports =
{
  getData: getData,
  stringArray: stringArray,
  falsyRemove: falsyRemove
};