var natural = require('natural');
var tfidf = new natural.TfIdf();

var documents = [
    "Stick charts were made and used by the Marshallese to navigate the Pacific Ocean by canoe off the coast of the Marshall Islands.",
    "The charts represented major ocean swell patterns and the ways the islands disrupted those patterns, typically determined by sensing disruptions in ocean swells by islands during sea navigation.",
    "Most stick charts were made from the midribs of coconut fronds that were tied together to form an open framework.",
    "Island locations were represented by shells tied to the framework, or by the lashed junction of two or more sticks.",
    "The threads represented prevailing ocean surface wave-crests and directions they took as they approached islands and met other similar wave-crests formed by the ebb and flow of breakers.",
    "Individual charts varied so much in form and interpretation that the individual navigator who made the chart was the only person who could fully interpret and use it.",
    "The use of stick charts ended after World War II when new electronic technologies made navigation more accessible and travel among islands by canoe lessened.",
    "The stick charts are a significant contribution to the history of cartography because they represent a system of mapping ocean swells, which was never before accomplished.",
    "They also use different materials from those common in other parts of the world. They are an indication that ancient maps may have looked very different, and encoded different features from the earth, than the maps we use today.",
    "Marshallese navigators used their senses and memory to guide them on voyages by crouching down or lying prone in the canoe to feel how the canoe was being pitched and rolled by underlying swells."
];

documents.forEach(function(item){
    tfidf.addDocument(item);
});











