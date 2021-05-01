const HelloFunc = require("./helloWorld");

//setInterval

setInterval(() => {
    HelloFunc.Hello();
}, 1000);

setTimeout(() => {
    console.log(HelloFunc.name);
}, 5000);

//local module
//global module
//party / package module
