// Code your solutions in this file
function writeCards(array, event){
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(`Thank you, ${array[index]}, for the wonderful surprise gift!`)

    }
    return newArray
}

function countDown(){
    for (let index = 10; index >= 0; index--) {
        console.log(index)

    }
}

function countUp(){
    for (let index = 0; index <= 10; index++) {
        console.log(index)

    }
}
