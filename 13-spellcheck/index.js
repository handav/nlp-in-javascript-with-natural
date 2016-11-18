var natural = require('natural');
var fs = require('fs');
var tokenizer = new natural.WordTokenizer();

var text = fs.readFileSync('lotsofwords.txt', 'utf-8');
var corpus = tokenizer.tokenize(text);
var spellcheck = new natural.Spellcheck(corpus);

var sentence = "Tey hade truble fiinding th thng".split(" ");

sentence.forEach(function(word){
    console.log(spellcheck.getCorrections(word)[0]);
});