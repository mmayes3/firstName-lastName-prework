var game = {
    wins:0,
    words: ['bears', 'cheifs', 'cowboys', 'seahawks', 'packers', 'patriots','ravens','saints','steelers'],
    images: ['assets/images/bears.jpg', 'assets/images/cheifs.jpg', 'assets/images/cowboys.png', 'assets/images/seahawks.jpg', 'assets/images/packers.png', 'assets/images/patriots.png', 'assets/images/ravens.jpg', 'assets/images/saints.jpg', 'assets/images/steelers.jpg'],
    currentIndex: 0,
    currentWord: '',
    lettersGuessed: [],
    correctLetters: [],
    guessesRemaining:0,
};
game.initWord = function(){
    this.lettersGuessed = [];
    this.correctLetters = [];
    this.currentWord = this.words[this.currentIndex];
    this.checkLetters();
    this.setGuessesRemaining();
    // console.log(this.guessesRemaining);
    this.displayWord();
    this.displayGuessed();
    return 0;
}
game.letterGuessed = function(x)  {
    console.log(x);
    x = x.toLowerCase();
    if (this.lettersGuessed.includes(x)) {

    } else {
        if (this.currentWord.includes(x) || x == " ") {
            wordContainer = document.getElementById('word-container');
            children = wordContainer.children;
            for(var i = 0; i<this.currentWord.length; i++){
                if(this.currentWord[i] === x){
                    children[i].setAttribute('class','word mx-2 text-center visible text-capitalize');
                    children[i].innerHTML = x;
                }
            }
            this.checkWin(x);
        } else {
            this.lettersGuessed.push(x);
            this.guessesRemaining--;
            this.displayRemGuesses();
            if (this.guessesRemaining <= 0) {
                this.nextWord();
            }
        }
    }
}

game.nextWord = function()  {
    this.currentIndex++;
    if(this.currentIndex > this.words.length-1){
        this.currentIndex = 0;
        // console.log(this.currentIndex);
    } else {
        // console.log(this.currentIndex);
    }
    this.initWord();
}

game.checkLetters = function(){
    for(var i = 0; i<this.currentWord.length; i++){
        if(!this.correctLetters.includes(this.currentWord[i])){
            this.correctLetters.push(this.currentWord[i]);
        }
    }
}

game.displayWord = function(){
    // display current word
    var currentWord = this.words[this.currentIndex];
    image = document.getElementById('word-image');
    image.setAttribute('src',this.images[this.currentIndex]);
    wordContainer = document.getElementById('word-container');
    gRemaining = document.getElementById('remaining-guesses');
    gRemaining.innerHTML = this.guessesRemaining;
    wordContainer.innerHTML = '';
    for (var i = 0; i < currentWord.length; i++) {
        wordNode = document.createElement('p');
        wordNode.setAttribute('class', 'word mx-2 text-center');
        wordContainer.appendChild(wordNode);
    }
}

game.displayGuessed = function(){
    guessedContainer = document.getElementById('guessed');
    guessedContainer.innerHTML = '';
    for (var i = 0; i < this.lettersGuessed.length; i++) {
        wordNode = document.createElement('p');
        wordNode.setAttribute('class', 'word visible mx-2 text-center text-capitalize');
        wordNode.innerHTML = this.lettersGuessed[i];
        guessedContainer.appendChild(wordNode);
    }
}

game.checkWin = function(x){
    index = this.correctLetters.indexOf(x);
    if(index > -1){
        this.correctLetters.splice(index, 1);
        if (this.correctLetters.length <= 0) {
            this.wins++;
            winCounter = document.getElementById('wins');
            winCounter.innerHTML = this.wins;
            this.nextWord();
        }
    }
}

game.setGuessesRemaining = function () {
    this.guessesRemaining = this.currentWord.length * 2;
}

game.displayRemGuesses = function () {
    gRemaining = document.getElementById('remaining-guesses');
    gRemaining.innerHTML = this.guessesRemaining;
}
game.initWord()
body = document.getElementById('body');
body.addEventListener('keydown', function (event) {
    console.log(game.guessesRemaining);
    game.letterGuessed(event.key);
    console.log(game.guessesRemaining);
    game.displayGuessed();
    console.log(game.guessesRemaining);
})
