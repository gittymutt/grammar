var verbPhrases = [];
var subjects = [];

var SING = 1;
var PL = 2;
var I = 0;


// Insert verb phrase
var BF = "sing";
var simplePres = "sings";
var simplePast = "sang";
var ingForm = "singing"
var verbPhrase = {BF: BF, simplePast: simplePast, ingForm: ingForm, simplePres: simplePres };
verbPhrases.push(verbPhrase);

var BF = "go";
var simplePres = "goes";
var simplePast = "went";
var ingForm = "going";
var verbPhrase = {BF: BF, simplePast: simplePast, ingForm: ingForm, simplePres: simplePres };
verbPhrases.push(verbPhrase);

var BF = "swim";
var simplePres = "swims";
var simplePast = "swam";
var ingForm = "swimming";
var verbPhrase = {BF: BF, simplePast: simplePast, ingForm: ingForm, simplePres: simplePres };
verbPhrases.push(verbPhrase);

// Insert subject
var word = "he and I";
var number = PL;
var subject = {word: word, number: number};
subjects.push(subject);

var word = "Mr. Bean";
var number = SING;
var subject = {word: word, number: number};
subjects.push(subject);

var word = "I";
var number = I;
var subject = {word: word, number: number};
subjects.push(subject);

var newsubj = {word:"they", number: PL};
subjects.push(newsubj);

var newsubj = {word:"my friend's sister", number: SING};
subjects.push(newsubj);

