var verbPhrases = [];
var subjects = [];
var timePhrases = [];

var SING = 1;
var PL = 2;
var I = 0;
var SPRES = 0;
var PPROG = 1;
var SPAST = 2;


// List of verbs

verbPhrases.push({BF: "sing", simplePast: "sings", ingForm: "singing", simplePres: "sings"});
verbPhrases.push({BF: "sing", simplePast: "sang", ingForm: "singing", simplePres: "sings"});
verbPhrases.push({BF: "go", simplePast: "went", ingForm: "going", simplePres: "goes"});
verbPhrases.push({BF: "swim", simplePast: "swam", ingForm: "swimming", simplePres: "swims"});
verbPhrases.push({BF: "drive", simplePast: "drove", ingForm: "driving", simplePres: "drives"});
verbPhrases.push({BF: "play", simplePast: "played", ingForm: "playing", simplePres: "plays"});

//list of nouns

subjects.push({word: "Mr. Bean", number: SING});
subjects.push({word: "he and I", number: PL});
subjects.push({word: "I", number: I});
subjects.push({word: "they", number: PL});
subjects.push({word: "my friend's sister", number: SING});

// List of time phrases

timePhrases.push({word: "every day", tense: SPRES});
timePhrases.push({word: "twice a week", tense: SPRES});
timePhrases.push({word: "all the time", tense: SPRES});
timePhrases.push({word: "now", tense: PPROG});
timePhrases.push({word: "at the moment", tense: PPROG});
timePhrases.push({word: "yesterday", tense: SPAST});
timePhrases.push({word: "last week", tense: SPAST});
timePhrases.push({word: "three days ago", tense: SPAST});





