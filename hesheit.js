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
	if (theVerbPhrase['simplePast'] == null) return "ERROR! Don't got a simplePast!!";
	return theVerbPhrase['simplePast'];	
}

var el = document.getElementById("out");
var index = 0;
var newSent = function() {
    sindex = Math.floor(Math.random()*subjects.length);
    vindex = Math.floor(Math.random()*verbPhrases.length);
    tindex =  Math.floor(Math.random()*timePhrases.length);
    el.innerHTML = "<span id=\"subject\">" + subjects[sindex]['word'] + "</span> / " +  "<span id=\"verb\">" + verbPhrases[vindex]['BF'] + "</span>" + " / " + timePhrases[tindex]['word'];



    if (timePhrases[tindex]['tense'] == SPRES) {
    document.getElementById('simplePres').innerHTML=  "<span id=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " + 
 "<span id=\"verb\">" + getSimplePres(subjects[sindex], verbPhrases[vindex]) +  "</span> " +
    timePhrases[tindex]['word'] + ".</br>";

    document.getElementById('simplePres').innerHTML += "<span id=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getNegSimplePres(subjects[sindex], verbPhrases[vindex]) + " " +  "<span id=\"verb\">" + verbPhrases[vindex]['BF'] + "</span> " +
    timePhrases[tindex]['word'] + ".</br>" ;
	
    document.getElementById('simplePres').innerHTML +=  capitalizeFirstLetter(getSimplePresHelpingVerb(subjects[sindex], verbPhrases[vindex])) +
	 " <span id=\"subject\">" + subjects[sindex]['word'] + "</span> " + "<span id=\"verb\">" + verbPhrases[vindex]['BF'] +  "</span> " +
    timePhrases[tindex]['word'] + "?" ;
    }
    
    if (timePhrases[tindex]['tense'] == PPROG) {

        document.getElementById('simplePres').innerHTML = "<span id=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getBe(subjects[sindex]) + " " +  "<span id=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + "."
	+ "</br>";
	
        document.getElementById('simplePres').innerHTML += "<span id=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getBe(subjects[sindex]) + " not " +  "<span id=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + ".</br>";
	
        document.getElementById('simplePres').innerHTML +=
	 capitalizeFirstLetter(getBe(subjects[sindex]))  + "<span id=\"subject\"> " + subjects[sindex]['word'] + "</span> " +  "<span id=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + "?";
    }

}

var buttEl = document.getElementById("butt");
buttEl.onclick = newSent;

