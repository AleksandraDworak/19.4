'use strict';

//ZADANIE 1
console.log('ZADANIE 1');

var strHello = 'hello';
var strWorld = 'world';
console.log(strHello + ' ' + strWorld);

//ZADANIE 2 
console.log('ZADANIE 2');

var multiply = function multiply(x) {
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log(x * y);
};
multiply(4, 3);
multiply(7);

//ZADANIE 3
console.log('ZADANIE 3');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return console.log(args.reduce(function (partialSum, rest) {
		return partialSum + rest;
	}, 0) / args.length);
};

average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4


//ZADANIE 4
console.log('ZADANIE 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//ZADANIE 5
console.log('ZADANIE 5');

var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = arr[2];
var lastName = arr[4];

console.log(firstName + ', ' + lastName);
