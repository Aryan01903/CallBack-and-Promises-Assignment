// Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after a delay of 1 second.

function sumAsync(a,b,callback){
    setTimeout(()=>{
        const result=a+b;
        callback(result);
    },1000)
}
sumAsync(3,7,(result)=>{
    console.log(result);
})