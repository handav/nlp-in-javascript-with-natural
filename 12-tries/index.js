var natural = require('natural');
var trie = new natural.Trie();

var birdNames = ['albatross','anhinga','auklet','avocet','bishop','bittern','blackbird','bluebird','bobolink','booby','brant','bufflehead','bunting','canvasback','cardinal','catbird','chat','chickadee','chukar','coot','cormorant','cowbird','crane','creeper','crossbill','crow','cuckoo'];

birdNames.forEach(function(item){
    trie.addString(item);
});

console.log(trie.findMatchesOnPath("cuckoohead"));