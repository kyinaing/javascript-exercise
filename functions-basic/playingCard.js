// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard1() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

    const valIdx = Math.floor(Math.random() * values.length);
    const suitIdx = Math.floor(Math.random() * suits.length);

    const value = values[valIdx];
    const suit = suits[suitIdx];

    return { value: value, suit: suit};
}

// method 2

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {
    const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
    const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
    return {value: pick(values), suit: pick(suits)};
}