const setenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCountElem");
const errorMessageElem = document.querySelector("errorMessage");
const wordsElem = document.querySelector(".words");
const analyzeBtn = document.querySelector(".analyze");
const tasks = document.querySelector('.tasks');
const longerThanFour =document.querySelector(".longerThanFour");
const sentence =document.querySelector(".list");
const messages = document.querySelector(".sentences");
const previousSentences = [];





function showWords(words){
	
	const wordElements = words.map(word =>{
		
	return `<span class="word ${word.type}">${word.word}<span class="small">(${word.length})</span></span>`
		
	
   });
   wordsElem.innerHTML = wordElements.join("");
   wordCountElem.innerHTML = words.length;

   
}
//
// let todoList = [];
// if(localStorage['todos']){
// 	const todoList = JSON.parse( localStorage['todos']);
// 	todoList = todoListString.split(",");
// 	showTodos(todoList);
// }


analyzeBtn.addEventListener('click', function(){

     if(setenceElem.value.trim().length === 0){
		wordsElem.innerHTML= " ";
		wordCountElem.innerHTML= 0;
		return;
	}

	const wordCounter =WordCounter(setenceElem.value);

	const words= wordCounter.getWords();

	showWords(words);
    
	previousSentences.unshift(words)
   if(previousSentences.length <= 5){
          sentence.innerHTML = `Last 5 Sentences: ${previousSentences}, `;

   }
   messages.innerHTML = `${words},`;

	// if(wordsElem.innerHTML.length === 0){
	// 	wordCountElem.innerHTML= 0
	// }else{
	// 	wordCountElem.innerHTML = words.length;
	// }
      

	// todoList.push(task.value);


	// localStorage['todos'] = JSON.stringify(todoList);

    //  task.value ="";
	//  showTodos(todoList); 

	
});

//
// function showTodos(todos){
// 	tasks.innerHTML = "";
//     todos.forEach(todo =>{
// 		const newTask =document.createdElement('li');
// 		newTask.innerHTML = todo;
// 		tasks.appendChild(newTask);
		
// 	});
// }

longerThanFour.addEventListener('click',function(event){
	
	const wordCounter =WordCounter(setenceElem.value);
	const words = event.target.checked ? wordCounter.getLongerWords() : wordCounter.getWords();
	showWords(words);
	
	// if(event.target.checked){
	// 	const words=wordCounter.getLongerWords();
	// 	showWords(words);
	//  }else{
	// 	const words = wordCounter.getWords();
	// 	showWords(words);
	//  }
	
    
    
});
//
const task = document.querySelector('.task');
const taskBtn = document.querySelector('.addTask');
// const tasks = document.querySelector('.tasks');


// let todoList = [];
// if(localStorage['todos']){
// 	const todoList = JSON.parse( localStorage['todos']);
// 	todoList = todoListString.split(",");
// 	showTodos(todoList);
// }

// taskBtn.addEventListener('click', function(){
// 	todoList.push(task.value);


// 	localStorage['todos'] = JSON.stringify(todoList);

//      task.value ="";
// 	 showTodos(todoList);     
		   
// });

// function showTodos(todos){
// 	tasks.innerHTML = "";
//     todos.forEach(todo =>{
// 		const newTask =document.createdElement('li');
// 		newTask.innerHTML = todo;
// 		tasks.appendChild(newTask);
		
// 	});
// }