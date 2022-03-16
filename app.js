const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const submitBtnElem = document.querySelector('.submitBtn');
const showSentenceElem = document.querySelector('.showSentence');
const hideElem = document.querySelector('#hide');



sentenceElem.addEventListener("keyup",()=>{
   const wordCount = wordCounter(sentenceElem.value);
   wordCountElem.innerHTML = wordCount;
})

let wordSelection = wordWidget(); 

const submitSentence = ()=>{
    
    const newWords = sentenceElem.value;
    if(newWords){
      
        showSentenceElem.innerHTML = wordSelection.newWord(newWords);
    }
  
    let submittedWords = newWords.split(" ");
    

    let highlighted = '';
    
        for (let i = 0; i < submittedWords.length; i++) {
            const hightlightWord = submittedWords[i];
            if(hightlightWord.length>4){
                highlighted += `<mark style= 'color:black'>${hightlightWord} </mark> `

            }else{
                highlighted +=  hightlightWord + ' ';
            }

            showSentenceElem.innerHTML = highlighted;
           
            
    }

}

// add event listener on btn to show action onclick
submitBtnElem.addEventListener('click', submitSentence);

//checkbox 

hide.addEventListener('click',()=>{
    const newWords = sentenceElem.value;
    if(newWords){
      
        showSentenceElem.innerHTML = wordSelection.newWord(newWords);
    }
  
    let submittedWords = newWords.split(" ");
    

    let highlighted = '';
    
        for (let i = 0; i < submittedWords.length; i++) {
            const hightlightWord = submittedWords[i];
            if(hightlightWord.length<5){
                highlighted += `<mark style= 'color:black'>${hightlightWord} </mark> `
               
            }else{
                highlighted += ' ';
            }

            showSentenceElem.innerHTML = hightlightWord;
           
            
    }
   
})


