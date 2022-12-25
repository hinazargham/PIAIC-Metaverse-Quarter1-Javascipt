// Question1: 

// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

/* print error message twice
We create a Promise using the constructor method, triggering an error mmediately 
with the reject callback. multiple handler callbacks can be added. Each will be called
with the same arguments */ 


// Question 2
// var p = new Promise((resolve, reject) => {
//     return Promise.reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

  /* UnhandledPromiseRejectionWarning
  When using the Promise constructor you must invoke either resolve() or reject() callbacks. 
  The Promise constructor doesn’t use your return value, so the additional Promise created with Promise.reject() 
  will effectively never be heard from again. With no .catch following the Promise.reject(), the answer is 
  UnhandledPromiseRejectionWarning.
  */

  // Question 3:

//   var p = new Promise((resolve, reject) => { .  
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error))
//   .then(error => console.log(error))

/* print error and `undefined`
*/

  // Question 4:
//   var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error.message))
//   .catch(error => console.log(error.message))

  /* print error message once
  When chaining .catch’s, each one only handles errors thrown in previous .then or .catch “steps”. 
  In this example the first .catch returns the console.log which could only be accessed via adding a .then() 
  after both the .catch’s.
  */

  // Question 5:

//   new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))

  /* nothing prints
  .catch’s can be used to ignore (or override) errors simply by returning a regular value.
  This trick works only when there is a subsequent .then to receive the value.
  */

  // Question 6:

//   Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })

  /* print "SUCCESS!"

  */

  // Question 7:

//   Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//     return data
//   })
//   .then(console.log)

  /* print "SUCCESS!" and "SUCCESS!" There are 2 console.log calls which will be called.
  */

  // Question 8:

//   Promise.resolve('Success!')
//   .then(data => {
//     data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })

  /* Print undefined. A return is key in order to pass a value to the next .then.
  */

  // Question 9:
//   Promise.resolve('Success!')
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return 'actually, that worked'
//   })
//   .then(data => {
//     throw Error('The fails!')
//   })
//   .catch(error => console.log(error.message))

  /* Print The fails!
  */