var natural = require('natural');
var Tagger = natural.BrillPOSTagger;

var myString = "Lys soldered the beautiful jewelry pieces".split(" ");

var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
var rules = baseFolder + "/data/English/tr_from_posjs.txt";
var lexicon = baseFolder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';


var tagger = new Tagger(lexicon, rules, defaultCategory, function(err){
    if (err){
        console.log(err);
    } else {
        console.log(tagger.tag(myString));
    }
});

