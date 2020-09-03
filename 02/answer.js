function oddInts(intArr) {
    let counterObj = {};
      
    intArr.forEach((int) => {
      let property = int;
      if (!counterObj.hasOwnProperty(property)) {
          counterObj[property] = 1;
      } else if (counterObj.hasOwnProperty(property)) {
          counterObj[property] = counterObj[property] += 1;  
      }
    });
  
    console.log(counterObj);
    
    let oddArr = [];
    for (const prop in counterObj) {
        if(prop % 2 !== 0){
            oddArr.push(prop);
        } 
    }
    return oddArr;  
  }
  
  console.log(oddInts([1,2,2,3,3,3,2,2,1]));