


const {getData} = require('./utility')


  const linearSearch = (data, val) => {  
                        
     for (let i = 0; i < data.length; i++) {

       

       if (data[i] == val) {
       
        
         

         return i;
        
      }
      
    } return null;
    
  }

    console.log(`linear: ${linearSearch(getData(),24)}`);

  