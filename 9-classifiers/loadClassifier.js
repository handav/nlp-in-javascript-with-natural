var natural = require('natural');

natural.LogisticRegressionClassifier.load('classifier.json', null, function(err, classifier){
    if (err){
        console.log(err);
    } else {
        var testComment = "is this about the sun and moon?";
        console.log(classifier.classify(testComment));
    }
});