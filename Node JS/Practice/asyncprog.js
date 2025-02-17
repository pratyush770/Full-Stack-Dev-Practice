const async = require('async')
function square(x) {
    return new Promise((resolve) => {   // Promise guarantees execution
        setTimeout(() => {
            resolve(Math.pow(x, 2))
        }, 2000)
    })
}
async function output(x) {
    const ans = await square(x)  // await pauses the execution of the output function until the Promise returned by square(x) is resolved
    console.log("Square of number is: ", ans)
}
output(10)  // async function will get called later since its asynchronous
for (i=1;i<=10;i++)  // this will get called first 
    console.log(i)