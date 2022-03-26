
function WordCounter(sentence){

    const punction= /[.:;,?!"'~[\]{}()<>/@#$%^&*=+_-]/g
    const words = sentence.replaceAll(punction,'').split(" ");

     //Keep track of the last 5 sentences enetred
	 if (lastEnteredSentenceArray.length < 5) {
		if (!lastEnteredSentenceArray.includes(sentence)) {
			lastEnteredSentenceArray.push(sentence)
			localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
			for (i = 0; i < lastEnteredSentenceArray.length; i++) {
				var nodeExample = document.createElement("li")
				var textNode = document.createTextNode(lastEnteredSentenceArray[i])
				nodeExample.appendChild(textNode)
			}
			document.getElementById("previous").appendChild(nodeExample)
		}
	  }else {
		lastEnteredSentenceArray.shift()
		if (!lastEnteredSentenceArray.includes(sentence)) {
			lastEnteredSentenceArray.push(sentence)
			localStorage.setItem('lastSentences', JSON.stringify(lastEnteredSentenceArray))
			console.log(lastEnteredSentenceArray);
			for (i = 0; i < lastEnteredSentenceArray.length; i++) {
				var nodeExample = document.createElement("li")
				var textNode = document.createTextNode(lastEnteredSentenceArray[i])
				nodeExample.appendChild(textNode)
			}
			document.getElementById("previous").innerHTML = lastEnteredSentenceArray.map(i => `<li>${i}</li>`).join('');
		}
	}

	const averageInput = sentence.split(" ").reduce((a, b) => a + b.length, 0)/sentence.split(" ").length
	const stringArray = lastEnteredSentenceArray.toString()
	
	const average = stringArray.split(" ").reduce((a, b) => a + b.length, 0)/stringArray.split(" ").length
	const round = average.toFixed(2)
	
	if (averageInput > round) {
		console.log("green");
		dot.classList.remove("orange");
		dot.classList.add("green");
	}
	else if (averageInput < round) {
		console.log("orange");
		dot.classList.remove("green");
		dot.classList.add("orange");
	}
   
	function getWords(){

        const wordlist = words.map(word =>{
            return{
                word,
                length: word.length,
                type: word.length > 4 ? "longer": ""
            }
        });
        //console.log(wordlist);
         let longestWord ={
             length:0
         };
         wordlist.forEach((word,index) => {
             if(word.length > longestWord.length){
                longestWord={...word,index}
             }
         });
         wordlist[longestWord.index].type = "longest";

            
        const longestWords = wordlist.filter(word => word.length === longestWord.length).forEach(word => word.type ="longest");
         return wordlist;

         
    }

    function getLongerWords(){
        return getWords().filter(word =>word.length > 4);
        
    }
return{
    getWords,
    getLongerWords
}
}
