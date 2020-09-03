// how to split string to array: https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

// accept a string, return a new string without any vowels in it. if no vowels present, return false
function disemvowel(str) {
    // if string contains vowels
    // return new string without vowels
    // else 
    // return false
    
    //1. change string to array
    //2. loop through array
    //3. at every iteration, check if vowel
    //4. if vowel, push to new string
    //5. return new string
    //6. else if no vowel
    //7. return false

    let strArr = str.split("");
    // console.log(strArr);
    let newArr = [];
   
 

    strArr.forEach(letter => {
        let re = /^[aeiou]$/i
        // if(letter !== 'a' || letter !== 'e' || letter !== 'i' || letter !== 'o' || letter !== 'u' ){

            if(letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u' && letter !== 'A' && letter !== 'E' && letter !== 'I' && letter !== 'O' && letter !== 'U'){
            newArr.push(letter);
            // console.log('in loop: ' + newArr.join(""));
            return newArr;
        } else {
            return false
        }
    })

    return newArr.join("");
  }

  console.log(disemvowel('hello world'));


      // const isLetterAVowel = (str) => {
    //     return ['a', 'e', 'i', 'o', 'u'].includes(str.charAt(0).toLowerCase());
    //   }

    // other way
    //  you can also pop of the letter if it's a vowel then rejoin it

  
// EASIEST SOLUTION
// one
    function disemvowel(str) {
        return str.replace(/[aeiou]/gi, '');
      }

//   two
      function disemvowel(str) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        
        return str.split('').filter(function(el) {
          return vowels.indexOf(el.toLowerCase()) == -1;
        }).join('');
      }



    //   TEST CASES
    //  codewars testing for js: https://github.com/Codewars/codewars.com/wiki/Language-JavaScript
    // testing with chai ?
    Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
  
Test.assertEquals(disemvowel(
    "No offense but,\nYour writing is among the worst I've ever read"
  ), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")

Test.assertEquals(disemvowel(
    "What are you, a communist?"
  ), "Wht r y,  cmmnst?")