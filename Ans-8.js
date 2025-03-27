function racePromises(promises){
    return Promise.race(promises);
}

const promise1=new Promise((resolve)=>
setTimeout(()=>resolve("Promise 1 resloved"),1000)
);

const promise2=new Promise((_,reject)=>
setTimeout(()=>reject("Promise 2 rejected"),500)
)

racePromises([promise1],[promise2])
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error);
    })
