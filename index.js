//fizzBuzz
function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(100);

// Complete the findNumber function below.
function findNumber(arr, k) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === k) {
			return 'YES';
		}
	}
	return 'NO';
}

//Find the largest numbers
const numbers = [ 1, 2, 3, 4, 5, 6 ];
console.log(Math.max(...numbers));

function largestNumber(num) {
	for (i = 0; i < num.length; i++) {
		if (num) {
		}
	}
}
