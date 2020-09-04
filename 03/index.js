
// The Challenge: Write a function that prints: 
// - too hot if the coffeeTemp is higher than 205
// - too cold if its lower than 195
// - ah perfect if its between 195 and 205

function perfectCoffee(coffeeTemp){
    if(coffeeTemp > 205){
        console.log('ouch, too hot!')
    } else if (coffeeTemp < 195){
        console.log('blegh, too cold');
    } else {
        console.log('aah perfect coffee!')
    }
}

perfectCoffee(200);