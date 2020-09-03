

function disemvowel(str) {

    let strArr = str.split("");
    let newArr = [];

    strArr.forEach(letter => {
            if(letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u' && letter !== 'A' && letter !== 'E' && letter !== 'I' && letter !== 'O' && letter !== 'U'){
            newArr.push(letter);
            return newArr;
        } else {
            return false
        }
    })

    return newArr.join("");
  }


  console.log(disemvowel('woohoo it WORKS!. day one completed!'));