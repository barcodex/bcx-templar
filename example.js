
// notes:
//  1. run this code from command line using "node example.js" command
//  2. in your own code, you would require('bcx-templar') instead
var t = require("./index.js");

console.log('raw template text:');
console.log(t.getTemplate('example'));
var data = {
	'name': {
		'first': 'John',
		'last': 'Doe'
	},
	'alias': 'JD'
};
console.log('processed template:');
console.log(t.doTemplate('example', data));
var arr = [
	data,
	{
		'name': {
			'first': 'Mary-Jane',
			'last': 'Phyllis'
		},
		'alias': 'MJP'
	}
];
console.log('looped template:');
console.log(t.loopTemplate('example', arr));
