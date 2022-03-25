describe("My Word Widget",function(){

    it("Should be able to find the longest word", function(){
        const wordCounter = wordCounter("The cat jumped up.");
        const words = wordCounter.getWords();
        assert.equal("longest",words[2].type)
    });
    it("Should be able to find the longer and longest word", function(){
        const wordCounter = wordCounter("The cat jumped up over the blue fence");
        const words = wordCounter.getWords();
        assert.equal("longest",words[2].type)
        assert.equal("",words[5].type)
        assert.equal("longer",words[6].type)
    });
    it("Should be able to return the number of words in another sentence", function(){
        const wordCounter = wordCounter();
        wordCounter.parseSentence("The dog ran after the cat.")
        assert.equal(6,wordCounter.wordCount());
    });
    
    });
    
    // describe("My word widget", function(){
    //     it("should be able to return the number of words in a sentence",function(){
    
    //      const wordCounter = wordCounter();
    //      wordCounter.parseSentence("The cat jumped up");
    //      assert.equal(4,wordCounter.wordCount());
    
    //     })
    //     it("should be able to return the number of words in a sentence",function(){
    //         const wordCounter = wordCounter();
    //         wordCounter.parseSentence("The dog  ran after the cat");
    //         assert.equal(6,wordCounter.wordCount());
        
    //     })
    
    //     it("should give me an error message is the sentence is too long",function(){
    //         const wordCounter = wordCounter();
    //         wordCounter.maxWordCount(4);
    //         wordCounter.parseSentence("The cat jumped up");
    //         assert.equal("your sentence is too long",wordCounter.wordCount());
    //     })
    
    //     it("should not give me an error message is the sentence is shorter than maxWordCount",function(){
    //         const wordCounter = wordCounter();
    //         wordCounter.maxWordCount(4);
    //         wordCounter.parseSentence("The cat jumped up");
    //         assert.equal("",wordCounter.wordCount());
    //     })
    // })
    