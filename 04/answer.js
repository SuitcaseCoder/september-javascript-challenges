function sumInt(num){
    let numArr = num.toString().split('');
    let sum = 0;
    numArr.map(int => {
        sum = sum + parseInt(int);
    } );
    return sum
}

console.log(sumInt(123)); //returns 6
console.log(sumInt(11250)); //returns 9
console.log(sumInt(64832)); //returns 23
console.log(sumInt(123)); //returns 6
console.log(sumInt(987654321)); //returns 45



