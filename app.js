const getSentence = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");
const display = document.querySelector(".sentenceDisplay");
const longest = document.querySelector(".longestWord")
const count = document.querySelector(".count");
const checkBox = document.querySelector(".hide");
const longerThan5 = document.querySelector(".longerThan5")
const lessthan5 = document.querySelector(".lessthan5")
const displaySentence = document.querySelector(".last5sentences");


var templateSource = document.querySelector(".templateName").innerHTML;

var userTemplate = Handlebars.compile(templateSource);

let wordsArray = []
let lastEnteredSentenceArray = []

function getWords() {
    const sentence = getSentence.value
    const punction= /[.:;,?!"'~[\]{}()<>/@#$%^&*=+_-]/g

    wordsArray = sentence.trim().replaceAll(punction,'').split(" ");
    const highlightedSentence = wordsArray.map(word => {
        if (word.length > 4) 
        { return `<mark>${word}</mark>` }
            return word 
    })
    
    
    let newSentence = ""
    for(i=0; i<highlightedSentence.length; i++){
        newSentence+= highlightedSentence[i] + " " 
    }
    
 
    let wordCount = sentence.split(" ").length
   
    count.innerHTML = wordCount

    
    let sentenceSplit = sentence.replaceAll(punction,'').split(' ');
    let longestWord = 0;
    let longestInString = ""
    for(var i = 0; i < sentenceSplit.length; i++){
        if(sentenceSplit[i].length > longestWord){
	        longestWord = sentenceSplit[i].length;
            longestInString = sentenceSplit[i];
        }
    }

    let longestWordArray = sentenceSplit.filter( (word) => {
         return word.length == longestInString.length
  
    })
    console.log(longestWordArray);
   
    longest.innerHTML = `<markLongest>${longestWordArray}</markLongest>`
    
 
    if(checkBox.checked === true){
        const wordsLongerThan5 = wordsArray.map(word => {
            if (word.length >= 5) {
                return `<mark>${word}</mark>` 
            }
          })
        let joinedArray = wordsLongerThan5.join(" ")
       
        display.innerHTML = " "
        lessthan5.innerHTML = joinedArray
    
    }else {
        lessthan5.innerHTML = ""
        display.innerHTML = newSentence
    }

    
  
    if(lastEnteredSentenceArray.length < 5){
        if(!lastEnteredSentenceArray.includes(sentence)){
            lastEnteredSentenceArray.push(sentence)
        }
    }else{
        lastEnteredSentenceArray.shift()
        
    }
    console.log(lastEnteredSentenceArray);
  
    displaySentence.innerHTML = `${lastEnteredSentenceArray} `

    
}
submitBtn.addEventListener('click', getWords)



