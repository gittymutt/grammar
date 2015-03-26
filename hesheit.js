function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getBe(theSubject) {
	if (theSubject['number'] == I) return "am";
	if (theSubject['number'] == SING) return "is";
	if (theSubject['number'] == PL) return "are";
	return "Error: Couldn't get form of BE";
	
}

function getSimplePres(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a simplePres!!";
	if (theSubject['number'] != SING) return theVerbPhrase['BF'];
	return theVerbPhrase['simplePres'];	
}

function getNegSimplePres(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a  negative simplePres!!";
	if (theSubject['number'] != SING) return "don't";
	return "doesn't";	
}

function getSimplePresHelpingVerb(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a simplePreshelping verb!!";
	if (theSubject['number'] != SING) return "do";
	return "does";	
}

function getSimplePast(theVerbPhrase) {
	if (theVerbPhrase['simplePast'] == null) return "HOEBAG! Don't got a simplePres!!";
	return theVerbPhrase['simplePast'];	
}

var el = document.getElementById("out");
var index = 0;
var newSent = function() {
    sindex = Math.floor(Math.random()*subjects.length);
    vindex = Math.floor(Math.random()*verbPhrases.length);
    tindex =  Math.floor(Math.random()*timePhrases.length);
    el.innerText = subjects[sindex]['word'] + " / " + verbPhrases[vindex]['BF'] + " / " + timePhrases[tindex]['word'];



    if (timePhrases[tindex]['tense'] == SPRES) {
    document.getElementById('simplePres').innerText= capitalizeFirstLetter(subjects[sindex]['word']) + " " + 
getSimplePres(subjects[sindex], verbPhrases[vindex]) +  " " +
    timePhrases[tindex]['word'] + ".\n";

    document.getElementById('simplePres').innerText += capitalizeFirstLetter(subjects[sindex]['word']) + " " +
	getNegSimplePres(subjects[sindex], verbPhrases[vindex]) + " " + verbPhrases[vindex]['BF'] + " " +
    timePhrases[tindex]['word'] + ".\n" ;
	
    document.getElementById('simplePres').innerText += capitalizeFirstLetter(getSimplePresHelpingVerb(subjects[sindex], verbPhrases[vindex])) + " " +
	  subjects[sindex]['word'] + " " + verbPhrases[vindex]['BF'] +  " " +
    timePhrases[tindex]['word'] + "?" ;
    }
    
    if (timePhrases[tindex]['tense'] == PPROG) {

        console.log("pres prog");
        document.getElementById('simplePres').innerText = capitalizeFirstLetter(subjects[sindex]['word']) + " " +
	getBe(subjects[sindex]) + " " + verbPhrases[vindex]['ingForm'] +  " " +
    timePhrases[tindex]['word'] + "."
	+ "\n";
	
        document.getElementById('simplePres').innerText += capitalizeFirstLetter(subjects[sindex]['word']) + " " +
	getBe(subjects[sindex]) + " not " + verbPhrases[vindex]['ingForm'] +  " " +
    timePhrases[tindex]['word'] + ".\n";
	
        document.getElementById('simplePres').innerText +=
	capitalizeFirstLetter(getBe(subjects[sindex])) + " " + subjects[sindex]['word'] + " " + verbPhrases[vindex]['ingForm'] +  " " +
    timePhrases[tindex]['word'] + "?";
    }

}

var buttEl = document.getElementById("butt");
buttEl.onclick = newSent;

