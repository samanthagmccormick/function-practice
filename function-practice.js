// #1

var tripleFive = function() {

	for (i = 0; i < 3; i++)  {
		console.log("Five!");
	};

};

// Call tripleFive();
tripleFive();


// #2

var lastLetter = function(x) {
	return x[(x.length - 1)];
};

console.log("lastLetter('hello'): " + lastLetter("hello"));
console.log("lastLetter('island'): " + lastLetter("island"));

// #3

var square = function(x) {
	return x * x;
};

console.log("square(3): " + square(3));
console.log("square(5): " + square(5));

// #4

var negate = function(x) {
	return x * -1;
};

console.log("negate(5): " + negate(5));
console.log("negate(8): " + negate(-8));

// #5 - can also do this with the split built-in function

var toArray = function(x,y,z) {

	var newArray = [];
	newArray.push(x);
	newArray.push(y);
	newArray.push(z);
	return newArray;

};

console.log("toArray(1,4,5): " + toArray(1,4,5));
console.log("toArray(8,9,10): " + toArray(8,9,10));

// #6

var startsWithA = function(x) {

	return ((x[0] === 'A') || (x[0] === 'a'));

};

console.log("startsWithA('aardvark'): " + startsWithA("aardvark"));
console.log("startsWithA('bear'): " + startsWithA("bear"));

// #7

var excite = function(x) {

	return x + "!!!";

};

console.log("excite('yes'): " + excite("yes"));
console.log("excite('no'): " + excite("no"));

// #8

// How to use indexOf: 
// // indexOf( substr )
// //	return -1 if not found
// //	return index of string found
// console.log('String indexOf:', 'hello world'.indexOf('l') );
// // ^ String indexOf: 2 
// console.log('String indexOf:', 'hello world'.indexOf('nope') );
// // ^ String indexOf: -1

var sun = function(x) {

	return x.indexOf("sun") >= 0

};

console.log("sun('sundries'): " + sun("sundries"));
console.log("sun('asunder'): " + sun("asunder"));
console.log("sun('catapult'): " + sun("catapult"));

// #9 

var tiny = function(x) {

	return ((x >= 0) && (x <= 1));

};

console.log(tiny(.3));
console.log(tiny(14));
console.log(tiny(-5));

// #10 

var getSeconds = function(x) {
	// Split the entry by its colon, put into an array called timeInArray
	var timeInArray = x.split(":");  

	// timeInArray[0] and timeInArray[1] now contain the minutes and seconds

	// Convert the minutes to seconds, and assign to new variable, minutesInSeconds
	var minutesInSeconds = (timeInArray[0] * 60);

	// Assign the seconds to new variable, seconds
	var seconds = timeInArray[1];

	// Your variables are still strings! Use parseFloat to convert each variable
	// to a number so that you can perform addition. Re-assign to the variable.
	minutesInSeconds = parseFloat(hoursInSeconds);
	seconds = parseFloat(seconds);

	// Perform addition and return
	return hoursInSeconds + seconds;
	
}

console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));

