// The Challenge: Given an array of integers, return the integers that appear an odd number of times

// Thought Process
// create an object to hold the integers passed, and the amount of times each appears
// loop through array
// at each number, IF it hasn't been added to object already add and count ++ to value of that integer ELSE add to the count to existing int
//  https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object

function oddInts(intArr) {
  let counterObj = {};
    
  intArr.forEach((int) => {
    let property = int;
    if (!counterObj.hasOwnProperty(property)) {
        // console.log('int at if ' + int);
        counterObj[property] = 1;
    } else if (counterObj.hasOwnProperty(property)) {
        // console.log('int at else ' + int);
        counterObj[property] = counterObj[property] += 1;
        // console.log(int + ' -> ' + property + ' : ' + counterObj[property]);

    }
  });

  console.log(counterObj);

//   go through object. if value of any property is an odd number, push the property into an array

    let oddArr = [];
for (const prop in counterObj) {
  console.log(`obj.${prop} => ${counterObj[prop]}`);
  if(prop % 2 !== 0){
    //   console.log('checking ' + prop +' answer here '+ prop % 2);
    //   oddArr.push(prop);
    oddArr.push(prop);
  } else {
      console.log('even');
  }
}
console.log('oddArr ->> ' + oddArr);

}

oddInts([1,2,3,4,5,1,1,1,2]);

//checkout suitcaseCoder youtube for further explanation and more answers.