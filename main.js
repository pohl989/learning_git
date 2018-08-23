document.addEventListener("DOMContentLoaded", function(){
   
    // variables
    var player
    var name = document.getElementById('name')
    var startButton = document.getElementById('start-button')
    var top = document.getElementById('top')
    var gameArea = document.getElementById('game-area')
    var numGuesses = 0
    var correctGuesses = 0
    var ballPosition
    var userGuess
    
    name.addEventListener('keyup', function(event){
        if (event.target.value !== "") {
            startButton.className=""
        } else {
            startButton.className="hide"
        }
        
    })


    //functions
    function genBallPosition() {
        //generate winning ball location
    }

    function incCounters() {
        //if correct correct guesses
        //if wrong guess increment wrong guess
        //update scoreboard accoring
    }

    function calcAverage(){
        // worry about this last
        // divide winning from attempted guesses
    }

    function makeGuess(){
        genBallPosition()
    }


    function drawBoxes() {
        for(var i = 0; i < 3; i++){
            var box = document.createElement('div')
            box.className = 'box'
            box.id = 'box-' + i
            gameArea.append(box)
            // game is stopped, need to make it continue with makeGuess
            box.addEventListener('click', makeGuess)
        }
    }


    function startGame() {
        player = name.value 
        startButton.classList="hide"
        var label = document.createElement('p')
        label.innerHTML = 'Welcome ' + player 
        label.className = 'center'
        top.append(label)
        drawBoxes()
    }




    startButton.addEventListener('click', startGame)




    
})