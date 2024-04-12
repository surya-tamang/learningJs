function simplePromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("Task completed!");
        },1000);
    })
}

simplePromise()
.then(message =>{
console.log(message);
})
.catch(error =>{
    console.log(error);
})