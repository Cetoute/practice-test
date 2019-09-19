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

//given two integers, l and r, print all the odd numbers between l and r (l and r inclusive)

function oddNumbers(l, r) {
	let arr = [];
	let smaller = l < r ? l : r;
	let larger = smaller === l ? r : l;
	let smallerOdd = !(smaller % 2 === 0) ? true : false;

	for (let i = smaller; i <= larger; i += 2) {
		if (smallerOdd) {
			arr.push(i);
		} else {
			arr.push(i + 1);
		}
	}
	return arr;
}

// oddNumbers(-3, -9)

console.log(4 % 2);
