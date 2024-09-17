// alert ("JavaScript Works!");

// select form by id 
const registerForm = document.querySelector("#register-form");
console.log (registerForm);

// Handle form submit event
registerForm.addEventListener("submit",  function (){
    // Collect username
    // Collect email
    // Collect password
    // Save user information
    // Send a confirmation email
});

// registerForm.onsubmit = function (){
//     // Collect username
//     // Collect email
//     // Collect password
//     // Save user information
//     // Send a confirmation email
// }


// Age Variable 
const age = 44;
// square of age
function squareAge (age) {
    const squaredAge = age ** 2;
   return squaredAge;
}

console.log(squareAge(age))


const squaredAge = squareAge(45);
console.log(squaredAge);
