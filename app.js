const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");

sentenceElem.addEventListener("keyup",()=>{
   const wordCount = wordCounter(sentenceElem.value);
   wordCountElem.innerHTML = wordCount;
})