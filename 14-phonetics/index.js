var natural = require('natural');
var soundex = natural.SoundEx;
var metaphone = natural.Metaphone;

var word1 = "write";
var word2 = "right";

if (soundex.compare(word1, word2)){
    console.log("SoundEx: Alike!");
} else {
    console.log("SoundEx: Unalike!");
}

if (metaphone.compare(word1, word2)){
    console.log("Metaphone: Alike!");
} else {
    console.log("Metaphone: Unalike!");
}

console.log(soundex.process(word1));
console.log(soundex.process(word2));
console.log(metaphone.process(word1));
console.log(metaphone.process(word2));

