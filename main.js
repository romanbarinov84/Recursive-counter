
// recursion function

function randomInteger(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let s1 = 0;

function getMoneyRecursion(){
    let random = randomInteger(0, 100);
    console.log(random);
    if(random <= 90){
        getMoneyRecursion()
    }
}

getMoneyRecursion()