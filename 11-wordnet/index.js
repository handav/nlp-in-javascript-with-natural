var natural = require('natural');
var wordnet = new natural.WordNet();

var myWord = 'desert';

wordnet.get(8522594, 'n', function(result){
    console.log(result.gloss);
});