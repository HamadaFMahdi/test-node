var counter = (arr) => {
  console.log(`there are ${arr.length} here`)
}

var hello = (a,b,c) => {
  console.log(a+b+c);
}

var lool = () => {
  console.log('banttssss');
}

module.exports = {
  counter: counter,
  hello: hello
}

// for one
/* module.exports = counter */

// for many
/*module.exports.counter = counter;
module.exports.hello = hello;*/
