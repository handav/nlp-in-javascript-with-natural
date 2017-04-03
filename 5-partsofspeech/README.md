# 5. Tag parts of speech using Natural

An important component of many natural language processing projects is being able to identify the grammar of a piece of text. We’ll learn how to do that with Natural’s parts of speech (POS) tagger.  


For Natural version 0.5.0+, use the below code:

```var natural = require('natural');
var Tagger = natural.BrillPOSTagger;

var myString = "Lys soldered the beautiful jewelry pieces".split(" ");

var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
var rulesFilename = baseFolder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = baseFolder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new Tagger(lexicon, rules);
console.log(JSON.stringify(tagger.tag(myString)));
```