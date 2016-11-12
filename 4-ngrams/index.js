var natural = require('natural');
var NGrams = natural.NGrams;

var myString = "The monkey ate all of the bananas.";

console.log(NGrams.ngrams(myString, 3, '[S]', '[E]'));