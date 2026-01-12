console.log(3 + 4, 'Hello', 10 === 10)
// alert('I AM A DIFFERENT SCRIPT!')

// If Condition
// if () {

// }

// Example 1

if (1 === 1) {
    console.log("It's TRUE")
}

// Example 2

let rating = 3;

if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR')
}
else if (rating === 2) {
    console.log('MEETS EXPECTATIONS')
}

else if (rating === 1) {
    console.log('NEEDS IMPROVEMENT')
}

else {
    console.log('WTF!')
}

// Example 3

let num = 37;

if (num % 2 !== 0) {
    console.log('ODD NUMBER')
}

// Nesting Condition

function hasUpperCase(str) {
    return /[A-Z]/.test(str);
}

function hasNumber(str) {
    return /[0-9]/.test(str);
}

function hasSpecialChar(str) {
    return /[!@#$%^&*()-_=+\|{}; :?.>]/.test(str);
}



let password = " Knng.htet@123 ";

// console.log(hasUpperCase(password));
// console.log(hasNumber(password));
// console.log(hasSpecialChar(password));

let minLength = 8;

let maxLength = 15;

if (password.length >= minLength) {
    if (password.length <= maxLength) {
        if (hasUpperCase(password)) {
            if (hasNumber(password)) {
                if (hasSpecialChar(password)) {
                    console.log("Valid Password")
                } else {
                    console.log("Required at least One Special Character")
                }
            } else {
                console.log("Required at least ONE NUMBER")
            }
        } else {
            console.log("Required at least ONE CAPITAL LETTER")
        }
    } else {
        console.log("Your password is over Maximum Lenght. The maximun length is", maxLength)
    }
} else {
    console.log("Your password is required to meet Minimum Length. The minimun length is", minLength)
}

if (password.indexOf(' ') !== -1) {
    password = password.trim()
}

console.log(password)

// truthy and falsy value

// let loginUser = "admin@user.com";
// let loginUser = null;
// let loginUser;
let loginUser = 0/0;
// let loginUser = '';
// let loginUser = 0;
// let loginUser = false;

if (loginUser) {
    console.log("YOU ARE LOGGED IN!")
} else {
    console.log("PLEASE LOG IN")
}






