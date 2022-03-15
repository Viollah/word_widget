function wordCounter(sentence) {
 return sentence.split(" ").length;
}
//function for hightlighting the word with characters greater than 4
const wordWidget = () =>{

    const newWord = (nextSentence)=>{
 
        if(nextSentence != ''){
            console.log(nextSentence);

            return nextSentence;
        
        }
        
    }


    return{
        newWord,
    }
}
//function for the checkbox
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }