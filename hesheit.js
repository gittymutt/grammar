function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getSimplePres(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a simplePres!!";
	if (theSubject['number'] != SING) return theVerbPhrase['BF'];
	return theVerbPhrase['simplePres'];	
}

function getNegSimplePres(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a  negative simplePres!!";
	if (theSubject['number'] != SING) return "do not";
	return "does not";	
}

function getSimplePresHelpingVerb(theSubject, theVerbPhrase) {
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a simplePreshelping verb!!";
	if (theSubject['number'] != SING) return "do";
	return "does";	
}

var el = document.getElementById("out");
var index = 0;
var newSent = function() {
    sindex = Math.floor(Math.random()*subjects.length);
    vindex = Math.floor(Math.random()*verbPhrases.length);
    el.innerText = subjects[sindex]['word'] + " / " + verbPhrases[vindex]['BF'];

    document.getElementById('simplePres').innerText= capitalizeFirstLetter(subjects[sindex]['word']) + " " + 
getSimplePres(subjects[sindex], verbPhrases[vindex]) + ".";

    document.getElementById('simplePres').innerHTML += capitalizeFirstLetter(subjects[sindex]['word']) + " " +
	getNegSimplePres(subjects[sindex], verbPhrases[vindex]) + " " + verbPhrases[vindex]['BF'] + ".\n" ;
	
document.getElementById('simplePres').innerHTML += capitalizeFirstLetter(getSimplePresHelpingVerb(subjects[sindex], verbPhrases[vindex])) + " " +
	  subjects[sindex]['word'] + " " + verbPhrases[vindex]['BF'] + "?" ;



}

var buttEl = document.getElementById("butt");
buttEl.onclick = newSent;

