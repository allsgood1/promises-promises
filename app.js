document.addEventListener("DOMContentLoaded", function() {

slowMath.add(1, 1)
.then((sum) => {
    console.log(`Sum of 6 and 2 is ${sum}`);
    return slowMath.multiply(sum, 2)
}) .then((product) => {
    console.log(`multiply that by 2 to get ${product}`);
    return slowMath.divide(product, 4)
}) .then((quotient) => {
    console.log(`divide that by 4 to get ${quotient}`);
    return slowMath.subtract(quotient, 3)
}) .then((goober) => {
console.log(`subtract 3 from that to get ${goober}`);
return slowMath.add(goober, 98)
}) .then((sum) => {
    console.log(`add 98 to that sucker to get ${sum}`);
    return slowMath.remainder(sum, 2)
}) .then((remaining) => {
    console.log(`divide that sh*t by 2 and you'll have a remainder of ${remaining}`);
return slowMath.multiply(remaining, 50)
}) .then((product) => {
    console.log(`multiply this by 50 and you'll have ${product}`);
    return slowMath.remainder(product, 40)
}) .then((remainder) => {
    console.log(`dividing that by 40 ends up leaving a remainder of ${remainder}`); 
    return slowMath.add(remainder, 32)   
}) .then((sum) => {
    console.log(`delete systems 32 and add it to the 10 to get the final result, which is ${sum}, the answer to all things`)
})

.catch((err) => {
    console.log('u mess up a a ron');
    console.log(err);
})



})