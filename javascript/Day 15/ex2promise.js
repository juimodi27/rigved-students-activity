let myPromise = new Promise(function(resolve, rejected){
    // performing some backend operations
    let status = false;
    if(status) {
        resolve('promise is fullfilled');
    } else {
        rejected('promise is rejected')
    }
});
myPromise.then(function(res){
    document.write(`<p>Callback inside then() ${res}</p>`)
}).catch(function(err) {
    document.write(`<p>Callback inside catch() ${err}`);
});