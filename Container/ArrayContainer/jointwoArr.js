const {getData} = require('../utility')



const joinArr = (data, Arr) => {

       let newArr = data.concat(Arr);
       return newArr;
}

   console.log(joinArr(['shubham','manish','rohit'],['tiwari','pandey','verma']));



 const mergeArr = (arr1, arr2) => {
  let data = [];

  for(let i =0; i < arr1.length; i++) {
      data.push(arr1[i]);
  }
  for(let i =0; i < arr2.length; i++) {
    data.push(arr2[i]);
  }
 
   return data;
}
 
 console.log(mergeArr([1,2,3,4],[5,6,7,8]));

 
