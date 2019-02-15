// let and const lecture

/*
// ES5
var name5 = 'jane smith';
var age5 = 23;
name5 = 'jane miller';
console.log(name5);

// ES6
const name6 = 'jane smith';
let age6 = 23;
name6 = 'jane miller';
console.log(name6);
*/

// ES5 function
function driversLicense5(passedTest) {
	if (passedTest) {
		var firstName5 = 'Joe';
		var age5 = 1990;
	}
	
	console.log(firstName5 + ', born in ' + age5 + ' is now allowed to drive.');
	
};

driversLicense5(true);


//ES6

function driversLicense6(passedTest, firstName, age) {
	let firstName6;
	const age6 = 1990;
	if (passedTest) {
		firstName6 = 'Joe';
	}
	// can't access variables outside of the block chain, have to declare variables inside the block.
	console.log(firstName6 + ', born in ' + age6 + ' is now allowed to drive.');
	
};

driversLicense6(true);









let i = 23;

for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log(i);


/***************************
** BLOCKS AND IIFES	
*/

// ES6

// allows us to keep data private within this block between the brackets... can't access variables outside of block
{
	const a = 1;
	let b = 2;
}


// ES5

// To do this is ES5 we had to use an IIFE.
(function() {
	var c = 3;
})();


/***********
** Strings
*/


let firstName = 'Joe';
let lastName = 'Pollis';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2019 - year;
};

calcAge(yearOfBirth);



// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) 
+ ' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('s'));
console.log(n.includes('Po'));
console.log(`${firstName} `.repeat(5));






























