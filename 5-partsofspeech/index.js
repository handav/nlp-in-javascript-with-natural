var natural = require('natural');
var Tagger = natural.BrillPOSTagger;
var wordnet = new natural.WordNet();

console.log(typeof(wordnet));
// console.log(typeof(natural.BrillPOSTagger));

// var base_folder = "./node_modules/natural/lib/natural/brill_pos_tagger";

// var rules_file = base_folder + "/data/English/tr_from_posjs.txt";
// var lexicon_file = base_folder + "/data/English/lexicon_from_posjs.json";
// var default_category = 'N';
 
// var tagger = new Tagger(lexicon_file, rules_file, default_category, function(error) {
//   if (error) {
//     console.log(error);
//   }
//   else {
//     var sentence = ["I", "see", "the", "man", "with", "the", "telescope"];
//     console.log(JSON.stringify(tagger.tag(sentence)));
//   }
// });
