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



/*  map method */

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});