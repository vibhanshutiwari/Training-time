
const getData = (start = 10, end = 50) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
}




module.exports ={
    getData :getData
};