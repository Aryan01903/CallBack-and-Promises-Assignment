// Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The function should multiply each element of the array by 2 and pass the result to the callback.

function multiplyWithCallback(numbers,callback){
    const multipliedArray=numbers.map((num)=>num*2);
    callback(multipliedArray);
}

const inputArray=[8,4,2,6];
multiplyWithCallback(inputArray,(result)=>{
    console.log(result);
})