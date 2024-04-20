function modifyArray(arr) {
    var modifiedArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            modifiedArray.push(arr[i] * 2);
        }
    }
    return modifiedArray;
}

// Input array
var inputArray = [1, 2, 3, 4, 5, 6];

// Modify the array
var modifiedArray = modifyArray(inputArray);

// Print the modified array
for (var i = 0; i < modifiedArray.length; i++) {
    console.log(modifiedArray[i]);
}
var password = prompt("Enter password");

// Check conditions for password
if (
    password.length >= 6 &&                     // Password should be at least 6 characters long
    /[a-zA-Z]/.test(password) &&                // Password should contain alphabets
    /[0-9]/.test(password) &&                   // Password should contain numbers
    !/^[0-9]/.test(password) &&                  // Password should not start with a number
    !/\s/.test(password)                         // Password should not contain spaces
) {
    console.log("Valid password");
} else {
    console.log("Invalid password! Please enter a valid password.");
}

function findCommonElements(arr1, arr2) {
    var commonElements = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !commonElements.includes(arr1[i])) {
                commonElements.push(arr1[i]);
            }
        }
    }

    return commonElements;
}

// Input arrays
var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8];

// Find common elements
var result = findCommonElements(array1, array2);

// Print the result
console.log("Common elements:", result);

var prime = +prompt("Enter a number");

// Check if the number is less than or equal to 1
if (prime <= 1) {
    console.log("It's not a prime number");
} else {
    var isPrime = true;

    // Check for divisors from 2 up to square root of the number
    for (var i = 2; i * i <= prime; i++) {
        if (prime % i === 0) {
            isPrime = false; // Number is not prime
            break; // Exit the loop
        }
    }

    // Print the result
    if (isPrime) {
        console.log(`${prime} is a prime number.`);
    } else {
        console.log(`${prime} is not a prime number.`);
    }
}
// Input nested array
var nestedArray = [[1, 2], [3, 4], [5, 6]];

// Initialize an empty array to store the flattened array
var flattenedArray = [];

// Loop through each sub-array in the nested array
for (var i = 0; i < nestedArray.length; i++) {
    // Loop through each element in the sub-array
    for (var j = 0; j < nestedArray[i].length; j++) {
        // Push the element to the flattened array
        flattenedArray.push(nestedArray[i][j]);
    }
}

// Print the flattened array
console.log(flattenedArray);
