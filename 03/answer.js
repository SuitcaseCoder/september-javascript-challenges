function perfectCoffee(coffeeTemp){
    if(coffeeTemp > 205){
        console.log('ouch, too hot!')
    } else if (coffeeTemp < 195){
        console.log('blegh, too cold');
    } else {
        console.log('aah perfect coffee!')
    }
}

perfectCoffee(190);
perfectCoffee(220);
perfectCoffee(200);
