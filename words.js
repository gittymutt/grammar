var verbPhrases = [];
var subjects = [];
var timePhrases = [];

var SING = 1;
var PL = 2;
var I = 0;
var SPRES = 0;
var PPROG = 1;



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

BF = "drive";
simplePres = "drives";
simplePast = "drove";
ingForm = "driving";
verbPhrase = {BF: BF, simplePast: simplePast, ingForm: ingForm, simplePres: simplePres };
verbPhrases.push(verbPhrase);

BF = "play";
simplePres = "plays";
simplePast = "played";
ingForm = "playing";
verbPhrase = {BF: BF, simplePast: simplePast, ingForm: ingForm, simplePres: simplePres };
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

// insert time phrases

var word = "every day";
var tense = SPRES;
//var newtense = 
timePhrases.push({word:word, tense:tense});

word = "twice a week";
tense = SPRES;
timePhrases.push({word:word, tense:tense});

word = "all the time";
tense = SPRES;
timePhrases.push({word:word, tense:tense});

word = "now";
tense = PPROG;
timePhrases.push({word:word, tense:tense});

word = "at the moment";
tense = PPROG;
timePhrases.push({word:word, tense:tense});

