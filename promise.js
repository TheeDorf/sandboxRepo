// let promise = new Promise((resolve, reject) => {
//     if (success) {
//       resolve(successValue);
//     } else {
//       reject(errValue);
//     }
//   });



//   // Normal Function
// function add(x, y) {
//     return x + y;
//   }
  

    
// const query = (statement, values) => {
//     return new Promise((resolve, reject) => {
//       database.query(statement, values, (err, results) => {
//         if (err) reject(err);
//         else resolve(results);
//       });
//     });
//   };
  
//   query("SELECT * FROM PRODUCTS")
//     .then(results => /* use results */)
//     .catch(err => /* handle error */)


// console.log("Before promise");

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let num = Math.round(Math.random() * 10);
//     console.log(num);
//     if (num % 2 == 0) {
//       resolve(num);
//     } else {
//       reject(num);
//     }
//   }, 1000);
// });

// promise
//   .then((num) => {
//     return { num, doubled: num * 2 };
//   })
//   .then((obj) => console.log(`${obj.num} doubled is ${obj.doubled}`))
//   .catch((err) => {
//     console.error(`${err} is odd`);
//   });

let newPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("newPromise");
    },1000);
})
newPromise.then (()=> {
    console.log("it was a success").catch((err)=>{
        console.log("did not work");
    });
})
