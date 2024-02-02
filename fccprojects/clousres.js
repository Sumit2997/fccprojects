// function Greeting() {
//     const name = "sumit"

//     return function() {
//         console.log(name)
//     }
// }
// const greet = Greeting()
// console.log(greet())


function greeting(name) {
    const text = "Hello, " + name;

	return function() {
      console.log(text);
	}
}

const greet = greeting("Vivek");  

// console.log(text)  // ReferenceError: text is not defined
greet();  // output: "Hello, Vivek"