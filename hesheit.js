function capitalizeFirstLetter(string) {
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
	if (theVerbPhrase['simplePres'] == null) return "ERROR! Don't got a negative simplePres!!";
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
document.getElementById('simplePres').innerHTML= "Click the button to get a new sentence."

var disp =  document.getElementById('simplePres');
var index = 0;
var buttText = document.getElementById("butt").innerText;
var isShowing = false;
var sindex,vindex,itindex;


var newSent = function() {


if (!isShowing)
{
    isShowing = true;

    // randomly choose words from the list
    sindex = Math.floor(Math.random()*subjects.length);    
    vindex = Math.floor(Math.random()*verbPhrases.length);
    tindex =  Math.floor(Math.random()*timePhrases.length);



 el.innerHTML = "<span class=\"subject\">" +  subjects[sindex]['word'] + "</span> / " +  "<span class=\"verb\">" + verbPhrases[vindex]['BF'] + "</span>" + " / " + timePhrases[tindex]['word'];

console.log(el.innerHTML);


    disp.innerHTML=  "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> <span class=\"verb\">????????</span> " + timePhrases[tindex]['word'] + ". (Affirmative)</br>";

    disp.innerHTML += "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +  "<span class=\"verb\"> ?????????????? </span> " +
    timePhrases[tindex]['word'] + ". (Negative)</br>" ;
	
   disp.innerHTML += "<span class=\"verb\">" +  "????" + "</span>" +
	 " <span class=\"subject\">" + subjects[sindex]['word'] + "</span> " + "<span class=\"verb\">" + " ???????? "+  "</span> " +
    timePhrases[tindex]['word'] + "? (Yes/No Question)" ;
    




}
else

{
    isShowing = false;
    
    el.innerHTML = "<span class=\"subject\">" + subjects[sindex]['word'] + "</span> / " +  "<span class=\"verb\">" + verbPhrases[vindex]['BF'] + "</span>" + " / " + timePhrases[tindex]['word'];



    if (timePhrases[tindex]['tense'] == SPRES) {
   disp.innerHTML=  "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " + 
 "<span class=\"verb\">" + getSimplePres(subjects[sindex], verbPhrases[vindex]) +  "</span> " +
    timePhrases[tindex]['word'] + ".</br>";

    disp.innerHTML += "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getNegSimplePres(subjects[sindex], verbPhrases[vindex]) + " " +  "<span class=\"verb\">" + verbPhrases[vindex]['BF'] + "</span> " +
    timePhrases[tindex]['word'] + ".</br>" ;
	
   disp.innerHTML +=  "<span class=\"verb\">" + capitalizeFirstLetter(getSimplePresHelpingVerb(subjects[sindex], verbPhrases[vindex])) + "</span>"
       + " <span class=\"subject\">" + subjects[sindex]['word'] + "</span> " + "<span class=\"verb\">" + verbPhrases[vindex]['BF'] +  "</span> " +
    timePhrases[tindex]['word'] + "?" ;
    }
    
    if (timePhrases[tindex]['tense'] == PPROG) {

       disp.innerHTML = "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getBe(subjects[sindex]) + " " +  "<span class=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + "."
	+ "</br>";
	
       disp.innerHTML += "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " +
	getBe(subjects[sindex]) + " not " +  "<span class=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + ".</br>";
	
       disp.innerHTML +=  "<span class=\"verb\">" +
	 capitalizeFirstLetter(getBe(subjects[sindex])) + "</span>" + "<span class=\"subject\"> " + subjects[sindex]['word'] + "</span> " +  "<span class=\"verb\">" + verbPhrases[vindex]['ingForm'] +  "</span> " +
    timePhrases[tindex]['word'] + "?";
    }

    if (timePhrases[tindex]['tense'] == SPAST) {

       disp.innerHTML = "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> "  + " " 
           +  "<span class=\"verb\">" + verbPhrases[vindex]['simplePast'] +  "</span> " +
    timePhrases[tindex]['word'] + "."
	+ "</br>";
	
       disp.innerHTML += "<span class=\"subject\">" + capitalizeFirstLetter(subjects[sindex]['word']) + "</span> " + "didn't "
+  "<span class=\"verb\">" + verbPhrases[vindex]['BF'] +  "</span> " +
    timePhrases[tindex]['word'] + ".</br>";
	
       disp.innerHTML +=  "<span class=\"verb\">" + 
	 capitalizeFirstLetter("did") + "</span>" + "<span class=\"subject\"> " + subjects[sindex]['word'] + "</span> " +  "<span class=\"verb\">" + verbPhrases[vindex]['BF'] +  "</span> " +
    timePhrases[tindex]['word'] + "?";
    }
    

}
}
var buttEl = document.getElementById("butt");
buttEl.onclick = newSent;




//document.getElementById('simplePres').innerHTML.onclick = showWords;
 
