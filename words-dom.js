const setenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCountElem");
const errorMessageElem = document.querySelector("errorMessage");
const wordsElem = document.querySelector(".words");
const analyzeBtn = document.querySelector(".analyze");
const longerThanFour = document.querySelector(".longerThanFour");
const displaySentence = document.querySelector(".last5sentences");
const displayList = document.getElementById("previous");
const dot = document.querySelector(".dot")
let wordsArray=[]
let lastEnteredSentenceArray = []

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}

if (localStorage['lastSentences']) {
	lastEnteredSentenceArray = JSON.parse(localStorage.getItem('lastSentences'))
	console.log("Able to store on Local Storage");
}
for (i = 0; i < lastEnteredSentenceArray.length; i++) {
	var nodeExample = document.createElement("li")
	var textNode = document.createTextNode(lastEnteredSentenceArray[i])
	nodeExample.appendChild(textNode)
}
document.getElementById("previous").innerHTML = lastEnteredSentenceArray.map(i => `<li>${i}</li>`).join('');

function showWords(words) {
	const sliderValue = slider.value;

	const wordElements = words.map(word => {
		if(sliderValue != 0){
			if (word.length >= sliderValue) { 
				return  `<span class="word ${word.type}">${word.word} <span class="small">(${word.length})</span></span>` 
			}

		}else{
			return `${word.word}`
		}
	});
	
	wordsElem.innerHTML = wordElements.join("");
	wordCountElem.innerHTML = words.length;

	

}

analyzeBtn.addEventListener('click', function () {

	if (setenceElem.value.trim().length === 0) {
		wordsElem.innerHTML = " ";  
		wordCountElem.innerHTML = 0;
		return;
	}

	const wordCounter = WordCounter(setenceElem.value);

	const words = wordCounter.getWords();


	showWords(words);

	    
	

});

displayList.addEventListener('click',(evnt)=>{
	//const words = wordCounter.getWords();
	setenceElem.value = evnt.target.innerHTML;
	getWords();
	//showWords(words);
})


longerThanFour.addEventListener('click', function (event) {

	const wordCounter = WordCounter(setenceElem.value);
	const words = event.target.checked ? wordCounter.getLongerWords() : wordCounter.getWords();
	showWords(words);

});
