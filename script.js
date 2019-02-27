//ZADANIE 1
console.log('ZADANIE 1');

	const strHello = 'hello';
	const strWorld = 'world';
	console.log(`${strHello} ${strWorld}`);

//ZADANIE 2 
console.log('ZADANIE 2');

	const multiply = (x, y=1)  => console.log(x * y);
	multiply(4,3);
	multiply(7);

//ZADANIE 3
console.log('ZADANIE 3');

	const average = (...args) =>console.log(args.reduce((partialSum,rest) => partialSum+rest,0)/args.length);

	average(1) // 1
	average(1, 3) // 2
	average(1, 3, 6, 6) // 4


//ZADANIE 4
console.log('ZADANIE 4');

	const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
	average(...grades);

//ZADANIE 5
console.log('ZADANIE 5');

	const arr = [1, 4, 'Iwona', false, 'Nowak'];
	const [,,firstName,,,] = arr;
	const [,,,,lastName] = arr;
	console.log(`${firstName}, ${lastName}`);
