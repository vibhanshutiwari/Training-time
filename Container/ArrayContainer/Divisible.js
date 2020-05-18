 

 

 const checkDivisible = (arr, input) => {
  let max = [];

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i] % input == 0) {
           max.push(arr[i]);
           
        }
    }
    return max;
 }

   console.log(checkDivisible([1,2,3,4,5,6,7],3));

