var natural = require('natural');
var myString = "I'm surprised! I didn't know you could make it.";

var tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize(myString));