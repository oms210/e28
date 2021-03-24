const Game = {
    data() {
        return {
            playerName: '',
            gameStarted: false,
            guesses: [],
            correctGuesses: [],
            correct: false,
            puzzle: '',
            category: '',
            guess: '',
            lastPuzzle: '',
            feedback: 'false',
            displayPuzzle: '',
            playerTurn: true,
            feedbackMessage: '',
            puzzleWordsArray: [],
            puzzleLetters :[],
            roundOver: false,
            rounds: [{
                    number: 1,
                    winner: 'Player',
                    coin: 'heads',
                    choice: 'heads'
                },
                {
                    number: 2,
                    winner: 'Computer',
                    coin: 'tails',
                    choice: 'heads'
                },
                {
                    number: 3,
                    winner: 'Computer',
                    coin: 'heads',
                    choice: 'tails'
                },
                {
                    number: 4,
                    winner: 'Player',
                    coin: 'tails',
                    choice: 'tails'
                },
            ],
            puzzles: [{
                    category: 'On the map',
                    options: [
                        'New-Zealand',
                        'Atlantic-City',
                        'South-Africa'
                    ]
                },
                {
                    category: 'Phrase',
                    options: [
                        'I-knew-it',
                        'I-will-see-you-tomorrow',
                        'I-have-never-seen-anything-like-this-before'
                    ]
                },
                {
                    category: 'Place',
                    options: [
                        'Cold-Basement',
                        'Busy-Restaurant',
                        'College-Dorm'
                    ]
                }
            ]
        }
    },
    computed: {
        letters() {
            let letters = []
            for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
                letters.push(String.fromCharCode([i]).toLowerCase());
            }
            return letters;
        }
    },
    methods: {
        addGuess(event) {
            console.log(event);
            this.guesses.push(this.guess);
        },
        reset() {
            this.correct = false;
            this.guesses = [];
            this.guess = null;
            this.feedbackMessage = '';
            this.correctGuesses = [];
            this.puzzleLetters = [];
            this.playerTurn = false;
            this.displayPuzzle = '';
            this.lastPuzzle = null;
            this.category = null;
            this.puzzle = null;
            this.feedback = false;
            this.roundOver = false;
            this.playerName = '';
            this.gameStarted =false;
        },
        submitGuess() {
            this.guess = this.guess.toLowerCase();
            this.guesses.push(this.guess);
            this.feedback = true;
            //  this.correct = lowerCaseGuess == this.puzzleletters.includes(this.guess);
            if (this.puzzleLetters.includes(this.guess)) {
                if (!this.correctGuesses.includes(this.guess)) {
                    this.correctGuesses.push(this.guess);
                    this.feedbackMessage = 'Correct guess';
                    this.correct = true;
                    this.generatePuzzle();
                } else {
                    this.playerTurn = !this.playerTurn;
                    this.feedbackMessage = this.guess + ' has already been guessed.';
                    this.guess='';
                    this.correct = false;
                }
            } else {
                this.playerTurn = !this.playerTurn;
                this.feedbackMessage = this.guess.toUpperCase() + ' is incorrect.';
                this.guess='';
                this.correct = false;
            }
            setTimeout(() => this.feedback = false, 3000);
            if (!this.playerTurn)
                this.executeComputerGuess();
    
          this.guess = '';
        },
        startGame() {
          
           if (this.roundOver)
           this.reset();
            this.gameStarted = true;
            this.loadGame();
        },
        loadGame() {
           
            this.feedback = false;
            this.guess = '';
            while (this.puzzle === this.lastPuzzle) {
                this.choice = this.puzzles[Math.floor(Math.random() * this.puzzles.length)];
                this.category = this.choice.category;
                this.puzzle = this.choice.options[Math.floor(Math.random() * this.choice.options.length)];
            }
            this.lastPuzzle = this.puzzle;
             //all letters in lowercase stored invidually to compare for submitted guesses
            let allLettersArray = this.puzzle.split('');
            allLettersArray.forEach(element => {
                if (element !='-')
                this.puzzleLetters.push(element.toLowerCase());
            });
            this.generatePuzzle();
        },
        generatePuzzle() {
            let blankPuzzle = '';
            let puzzleWords = this.puzzle.split('-'); // to determine spaces in between words of a puzzle
            puzzleWords.forEach(element => {

                let words = element.split('');
                for (var idx = 0; idx < words.length; idx++) {
                    if (this.correctGuesses.length > 0 && this.correctGuesses.includes(words[idx].toLowerCase())) {

                        blankPuzzle = blankPuzzle + words[idx]; //populate letter if it is in the correctGuesses array

                    } else
                        blankPuzzle = blankPuzzle + '_';
                    blankPuzzle += ' ';
                }
                blankPuzzle = blankPuzzle + ' ';
            });
           
            if (blankPuzzle.indexOf('_') < 0) {
                this.roundOver = true;

                if (this.playerTurn)
                    this.feedbackMessage = this.playerName + ', Great work!';
                else
                    this.feedbackMessage = 'Sorry, ' + this.playerName + ', you lost. Better luck next time!';
            }
            this.displayPuzzle = blankPuzzle;
        },
        executeComputerGuess() {
            var that = this;
            let randomCheckForExistingGuesses = Math.floor(Math.random() * 10) + 1;
            
            setTimeout(() => that.guess = that.letters[Math.floor(Math.random() * that.letters.length)], 4000);
            setTimeout(function () {
                
                if (randomCheckForExistingGuesses % 2 == 0) {
                    if (that.guesses.includes(that.guess)) {
                        that.feedback = true;
                        that.playerTurn = true;                      
                        that.correct = false;
                        that.feedbackMessage = 'Wrong move. ' + that.guess.toUpperCase() + ' is incorrect.';
                        
                        
                    } else
                        that.submitGuess();
                } else {
                    that.submitGuess();
                }
                if (that.playerTurn)
                setTimeout(() => this.feedback = false, 3000);
            }, 5000);
           
        },
        deleteRound(number) {
            this.rounds = this.rounds.filter(round => round.number != number);
        }
    }
}
const RoundDetail = {
    name: 'RoundDetail',
    props: {
        number: {
            type: Number,
            default: 0
        },
        winner: {
            type: String
        },
        choice: {
            type: String
        }
    },
    data() {
        return {}
    },
    template: '#round-detail'
}

const app = Vue.createApp(Game)
app.component('round-detail', RoundDetail);
app.mount('#app');