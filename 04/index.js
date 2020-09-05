// The Challenge: Write  function that returns: the sum of all the numbers in the integer passed
// (ex: ServiceUIFrameContext(2521) // returns 10 // 2+5+2+1=10)

// toString()
// split()
// map
// parseInt

function sumInt(num){
    let numArr = num.toString().split('');
    console.log(numArr);
    let sum = 0;
    numArr.map(int => {

        console.log(int, sum);
        sum = sum + parseInt(int);
    } );
    console.log(sum);
}

sumInt(123);