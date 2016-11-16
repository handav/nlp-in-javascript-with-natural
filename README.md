# Natural Language Processing in JavaScript with Natural

In this course we’ll work through Natural’s API for natural language processing in JavaScript. We’ll look at how to process text: learning how to break up language strings, find the word roots, work with inflectors, find sequences of words, and tag parts of speech. We’ll learn how to find important stats about a body of text: how to compare strings, how to classify text with machine learning, how to use the tf-idf tool to find relevant words. We’ll look at some of the extra tools Natural gives us, including the dictionary/thesaurus of WordNet, a phonetics comparer that lets us see if two words sound the same, and a spellcheck feature. We’ll also look at tries and digraphs, two data structures that help us better analyze bodies of text.

## Lessons:

1. **Break up language strings into parts using Natural** - We will learn about “tokenizing,” the process of separating strings into parts. We will run through the four tokenizers included in Natural: WordTokenizer, WordPunctTokenizer, TreebankWordTokenizer, and RegexpTokenizer.

2. **Find the roots of words using stemming in Natural** - We will learn about “stemming,” the process of finding the root of words, often in order to group words by a common base root. We will look at the Porter and Lancaster Stemmers, briefly touch on Natural’s support for Russian and Spanish stemmers, and introduce the function to stem and tokenize at the same time.

3. **Pluralizing nouns and counting numbers with inflectors in Natural** - Inflectors are the modifiers of a word that indicate grammatical categories. While Natural’s coverage of inflectors is not comprehensive, we will show how Natural can pluralize/singularize nouns and count numbers. 

4. **Find sequences of words (n-grams) using Natural** - In this lesson, we will see how to find bigrams, trigrams, and any other length n-gram in a body of text. 

5. **Tag parts of speech using Natural** - An important component of many natural language processing projects is being able to identify the grammar of a piece of text. We’ll learn how to do that with Natural’s parts of speech (POS) tagger.  

6. **Compare similarity of strings through string distance in Natural** - We will learn how to compare how similar two strings are to each other, examining three algorithms: Jaro-Winkler, Levenshtein, and Dice’s Coefficient.  

7. **Classify text into categories with machine learning in Natural** - In this lesson, we will learn how to train a Naive Bayes classifier - a basic machine learning algorithm - in order to classify text into categories.

8. **Classify JSON text data with machine learning in Natural** - In this lesson, we will learn how to train a Naive Bayes classifier and a Logistic Regression classifier - basic machine learning algorithms - on JSON text data, and classify it into categories.

9. **Saving and loading classifiers into a new project in Natural** - In this lesson, we will learn how to save a Naive Bayes classifier and load it into a new project in order to classify new data.

10. **Identify the most important words in a document using tf-idf in Natural** - tf-idf, or term frequency-inverse document frequency, is a statistic that indicates how important a word is to the entire document. This lesson will explain term frequency and inverse document frequency, and show how we can use tf-idf to identify the most relevant words in a body of text. 

11. **Find a word’s definition using WordNet in Natural** - This lesson introduces WordNet, which is an important resource in natural language processing. With WordNet, we can look up a word’s definition, or find its synonyms. 

12. **Graph connections in text using Natural** - This lesson will introduce Edge-Weighted Digraphs and explain how we can use them to model connections in our text. 

13. **Search more efficiently with tries using Natural** - Tries are a data structure that provide an efficient way to search for the existence of a word or phrase in a body of text, or to search by prefix. 

14. **Include spell-check in text projects using Natural** - In this lesson, we’ll see how to use Natural’s probabilistic spell-checker, which uses the trie data structure. 

15. **Check if words sound alike using Natural** - In this lesson, we’ll take a look at Natural’s phonetics feature. We’ll learn how to check whether two words sound alike, looking at both the SoundEx and Metaphone algorithms.
