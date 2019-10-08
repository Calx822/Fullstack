
const parts = {
    name: 'aha',
    numbers:[4,5,6,8,10] 

}

parts.numbers.forEach(myFunction)

console.log(parts.numbers)

function myFunction(item,index,array) {
    array[index] = item / 2
}