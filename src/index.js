    let gameBoard = document.querySelector('.game-board')
    let shooter = document.querySelector('.shooter')
    let matrixUrl = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
    let loginArea = document.querySelector('.login')
    let currentCannonPosition
    
    let score = 0 
    let sessionId;

    const scoreShow = document.querySelector('.score')
    scoreShow.insertAdjacentHTML('beforeend',`<h2>Score: ${score}</h2>`)

    function renderShooterTiles(){
        let currentNum
        let shooterTileArray = []
        gameBoard = document.querySelector('.game-board')
        shooter = document.querySelector('.shooter')
        matrixUrl = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
        loginArea = document.querySelector('.login')
        
        for(i=0; i<60; i++) {
            let randNum = Math.floor(Math.random() * 4) + 1  
            while (randNum === currentNum){
                randNum = Math.floor(Math.random() * 4) + 1
            }
            currentNum = randNum

                if (randNum === 1){
                    let tile = new charlieTile()
                    shooterTileArray.push(tile)
                    //  debugger
                }
                if (randNum === 2){
                    let tile = new neerajTile()
                    shooterTileArray.push(tile)
                    // debugger
                }
                if (randNum === 3){
                    let tile = new simonTile()
                    shooterTileArray.push(tile)
                    // debugger
                }
                if (randNum === 4){
                    let tile = new wilfTile()
                    shooterTileArray.push(tile)
                    // debugger
                }
                // debugger
        }//end of for/
        // debugger
                for (j=0; j<10; j++){
                    gameBoard.insertAdjacentHTML('beforeend', `<div id=${j+1} class="box"><img src=${shooterTileArray[j].image_url} class ="pictures"></div>`)
                }//end of j for

                for (k=10; k<20; k++){
                    // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
                    gameBoard.insertAdjacentHTML('beforeend', `<div id=${k+1} class="box"><img src=${shooterTileArray[k].image_url} class ="pictures"></div>`)
                }//end of k for
                
                for(l=20; l<60; l++){
                    gameBoard.insertAdjacentHTML('beforeend', `<div id=${l+1} class="box"><img src=${matrixUrl} class ="pictures">`)
                }//end of l for
                
        console.log(shooterTileArray)
        renderCanon()
        return shooterTileArray
        
    }//end of shooter function


    function clearTilesHorizontal(){
        // debugger
        let allTiles = document.querySelectorAll('.box')

            for(let i=1; i < 9; i++){
                for( j=i ;j<50; j+=10){
                    // debugger
                    if(allTiles[j].querySelector('img').src === allTiles[j-1].querySelector('img').src && allTiles[j].querySelector('img').src === allTiles[j+1].querySelector('img').src && allTiles[j].querySelector('img').src !== matrixUrl){
                        console.log('it works')
                        allTiles[j-1].querySelector('img').src = matrixUrl
                        allTiles[j].querySelector('img').src = matrixUrl
                        allTiles[j+1].querySelector('img').src = matrixUrl
                        score += 3
                        // debugger
                    }//end of if
                }//end of for j
            } // end of i
    } //end of clearTilesHorizontal

    function clearTilesVertical(){
        // console.log("clearing vert")
        // debugger
        let allTiles = document.querySelectorAll('.box')
        for(i=10; i<50; i+=10){
            for(j=i;j<(i+10); j++){
                // debugger
                if(allTiles[j].querySelector('img').src === allTiles[j-10].querySelector('img').src && allTiles[j].querySelector('img').src === allTiles[j+10].querySelector('img').src && allTiles[j].querySelector('img').src !== matrixUrl){
                        console.log('it works')
                        allTiles[j-10].querySelector('img').src = matrixUrl
                        allTiles[j].querySelector('img').src = matrixUrl
                        allTiles[j+10].querySelector('img').src = matrixUrl
                        score += 3
                        // debugger
                }//end of if
            }//end of for j
        }//end of for i
    } //end of clearTilesVertical

    function shiftTilesUp(){
        // debugger
        let allTiles = document.querySelectorAll('.box')
        for(i=10; i<50; i++)
        // debugger
            if(allTiles[i].querySelector('img').src !== matrixUrl && allTiles[i-10].querySelector('img').src === matrixUrl){
                // debugger
                let personImage = allTiles[i].querySelector('img').src
                // debugger
                allTiles[i-10].querySelector('img').src = personImage
                // debugger
                allTiles[i].querySelector('img').src = matrixUrl
                // debugger
            }

    }///end of tile shift up

    function boardCleared(){
        let allTiles = document.querySelectorAll('.box')
        let imgMatrix = true
        for(i=0; i<10;i++){
            if(allTiles[i].querySelector('img').src === matrixUrl && imgMatrix){

            } else {
                imgMatrix = false
                return imgMatrix
            }//end of first if
            if(i === 9 && imgMatrix){
                console.log('thats nice')
            }//end of second if
        }//end of for loop
    }//end of boardCleared


    ///adding shooter -- Merging Alex's code **********************************************************
function renderCanon(){
        let z = document.getElementById('60')
        // debugger
        let ranTile = ['https://i.imgur.com/tnuhsYy.png', 'https://i.imgur.com/SrvkkhV.png', 'https://i.imgur.com/aSU28qw.png', 'https://i.imgur.com/JyxRnjJ.png']
        currentCannonPosition = 60
        ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]
        let imgSrc = `<img src="${ranCannonImage}" class="pictures">`
        z.innerHTML = imgSrc
        // debugger
        function emptyBox(num){
            // debugger
            console.log('we are in empty box', num)
            document.getElementById(num).innerHTML = `<img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class="pictures">`
            // console.log(z)
            // debugger
        }
        //fill next cannon
        function fillBox(num){
            console.log('we are in fill box', num)
            document.getElementById(num).innerHTML = `<img src=${ranCannonImage} class="pictures">`
            // debugger
        }
        
        let id = setInterval(slide, 150)



        let direction = 'left'

        function slide() {
            emptyBox(currentCannonPosition)
            if (currentCannonPosition == 60) {
                // console.log('if cannon pos is equal to 60', currentCannonPosition)
                direction = 'left'
            }
            if (currentCannonPosition == 51) {
                // console.log('if cannon pos is 51', currentCannonPosition)
                direction = 'right'
            }
            if (currentCannonPosition < 51) {
                // console.log('if cannon pos is less than 51', currentCannonPosition)
                currentCannonPosition = 60
                // slide()
            }
            if (direction === 'right') {
                // console.log('if direction is right', direction)
                currentCannonPosition++
            } else {
                // console.log('if direction is left', direction)
                currentCannonPosition--
            }
            fillBox(currentCannonPosition)
        }
    
        
        function shoot(){
            // debugger
            // if (currentCannonPosition>10){
            if (currentCannonPosition >10 && document.getElementById(`${currentCannonPosition - 10}`).innerHTML === `<img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&amp;rid=giphy.webp" class="pictures">`) {
                    // debugger    
                currentCannonImage = document.getElementById(`${currentCannonPosition}`).innerHTML
                    document.getElementById(`${currentCannonPosition}`).innerHTML = `<img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&amp;rid=giphy.webp" class="pictures">`
                    document.getElementById(`${currentCannonPosition - 10}`).innerHTML = currentCannonImage
                    
                    currentCannonPosition -= "10"
                    currentCannonImage = document.getElementById(`${currentCannonPosition}`).innerHTML
                    setTimeout(function(){ shoot()}, 100);

                    
                } else {
                    if(currentCannonPosition<51){
                        // console.log("fired bubble pos is less than 51?:", currentCannonPosition)
                        currentCannonPosition = 60
                        // clearInterval(id)
                        id = setInterval(slide, 150)
                        clearTilesVertical()
                        clearTilesHorizontal()
                        shiftTilesUp()
                        clearTilesVertical()
                        clearTilesHorizontal()
                        shiftTilesUp()
                        shiftTilesUp()
                        shiftTilesUp()
                        shiftTilesUp()
                        shiftTilesUp()
                        clearTilesVertical()
                        clearTilesHorizontal()
                        scoreShow.innerText = ""
                        scoreShow.insertAdjacentHTML('beforeend',`<h2>Score: ${score}</h2>`)
                        slide()
                    }else{
                        gameBoard = document.querySelector('.game-board')
                        shooter = document.querySelector('.shooter')
                        matrixUrl = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        loginArea = document.querySelector('.login')
                        
                        console.log('the game is over')
                        gameBoard.innerText = ""
                        loginArea.innerHTML = "YOU LOST. You're fired. " 
                        updateSession()
                        getHighScore()

                        
                        
                        // gameBoard.innerHTML = `Score: ${score}`

                        // document.removeEventListener("keydown", spaceListener)
                        // ideally here is where you want to patch
                        // update the score 
                        // and then we want the user to click a 'play again' button
                        // this should refresh the page

                        // document.querySelector('body').innerHTML = (`
                        //     <h1>WELCOME TO NIL CLASS DESTROYER</h1>
                        //     <div class = "login"></div>
                        //     <div class="score"></div>
                        //     <div class = "game-board">
                        
                        //     </div>
                        // `)

                     

                        // debugger
                        // loginOrSignUp()



                        // clearInterval(id)
                        // fetch(`http://localhost:3000/api/v1/sessions/${sessionId}`, {
                        //     method: "PATCH",
                        //     headers: {
                        //         "Content-Type": 'application/json',
                        //         "Accepts": 'application/json'
                        //     },
                        //     body: JSON.stringify({
                        //         score: score 
                        //     })
                        // })
                        

                    }

                        // clearTilesVertical()
                        // clearTilesHorizontal()
                        // shiftTilesUp()
                }//end of first if
            // }//END OF LAST IF
        }//end of shoot function

        console.log(shoot)
        // const spaceListener = createListener(0, shoot, id, ranTile, fillBox, emptyBox)

        slide()
        
        function listenForSpaceBar(){
            let oldTime = 0
            // console.log("attaching", document.querySelector(".game-board"))
            document.addEventListener("keydown", (event) => {
                console.log("SPACE")
                if ((event.timeStamp - oldTime) > 175 && event.code === "Space") {
                    // debugger
                    // console.log("id", id)
                        oldTime = event.timeStamp
                        // debugger
                        shoot()
                        // debugger
                        clearInterval(id)
                        ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]            
                        fillBox(60)     
                    }//end of if
                })//end of event listener
            }//listen for spacebar function
            // shoot()
            
            //---------- INSERTED EUGENIA'S CODE -----------------//
            listenForSpaceBar()
}//render cannon function

// function createListener(oldTime,shoot, id, ranTile, fillBox, emptyBox){
//     console.log("CREATING")
//     return 
// }


function getHighScore(){
    return fetch('http://localhost:3000/api/v1/sessions')
    .then(response => response.json())
    .then(function(data){ 
        let promiseData = data
        let sortedScores = promiseData.sort(function(a, b) {
            return +a.score - +b.score
        })
        let topScores = sortedScores.slice(-5)
        let arrayNum = [5,4,3,2,1]
        for (i = 0; i < 5; i++){  
                // debugger      
                loginArea.insertAdjacentHTML("afterend", `
                
                <br>${arrayNum[i]}. ${topScores[i].score}
                
            `)}///end of for
        loginArea.insertAdjacentHTML("afterend", `
            <h3>Leaderboard Top Scores: </h3>
        `)
            
        })
    console.log(topScores)
    console.log(promiseData)
}
    
function loginOrSignUp(){
    console.log('are we here')
    loginArea = document.querySelector('.login')
    loginArea.insertAdjacentHTML('beforeend', 
    `<button id="login" type="button">Login</button>
    <button id="sign-up" type="button">Sign Up</button>
    `)
    addEventListenerToButtons()
}

function renderSignUpForm(){
    loginArea.insertAdjacentHTML('beforeend', 
    `<form id="signUpForm">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <label for="first_name"><b>First Name</b></label>
        <input type="text" placeholder="First Name" name="first_name" required>
        <label for="last_name"><b>Last Name</b></label>
        <input type="text" placeholder="Last Name" name="last_name" required>
        <br>
        <br>
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="User Name" name="username" required>
        <br>
        <input id="submitSignUp" type="submit" value="Create Account and Login"> 
    </form>`
    )
}

function renderLoginForm(){
    loginArea.insertAdjacentHTML('beforeend', 
    ` Login:
    <form name="login" method="get" accept-charset="utf-8">  
        <label for="username">Username</label>  
        <input type="username" name="username" placeholder="username" required>
        <br>  
        <input id="submitLogin" type="submit" value="Login">   
    </form> `
    )
}

function login(user){
    return fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => {
        let found = data.find(data => data.username === `${user}`)
        if (found){
        fetch('http://localhost:3000/api/v1/sessions', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accepts":"application/json"
        },
        body: JSON.stringify({
            user: user
        })
        })
        .then(response => response.json())
        .then(data => { 
            sessionId = data.id 
        })
        renderShooterTiles()
        // loginArea.innerText = `score = ${score}`
    }
    else {
        alert('Login Failed Please Try Again')
    }
    })
}

function createUser(firstName, lastName, username){
    return fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username: username
        })
    }).then(resp => resp.json())
    .then(data => {
        
        let username = data.username
    })
}

function updateSession(){
    return fetch(`http://localhost:3000/api/v1/sessions/${sessionId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            score: score 
        })
    })
}

// document.addEventListener('DOMContentLoaded', function(event){
    loginOrSignUp()

    function addEventListenerToButtons() {

    const loginBtn = document.querySelector('#login')
    const signupBtn = document.querySelector('#sign-up')
    signupBtn.addEventListener('click', function(event){ 
        loginArea.innerText = ""   
        renderSignUpForm()
        loginArea.addEventListener('submit', function(event){
            event.preventDefault()
            array = document.querySelectorAll("input")
            let firstName = array[0].value
            let lastName = array[1].value
            let username = array[2].value
            createUser(firstName, lastName, username)
            .then(() => {
                login(username)
                loginArea.innerText = ""})
        })
    })    
    loginBtn.addEventListener('click', function(event){
        loginArea.innerText = "" 
        renderLoginForm()
        loginArea.addEventListener('submit', function(event){
            console.log(event)
            event.preventDefault()
            let user = document.querySelector('input').value 
            console.log('loging login')
            
            login(user) 
            // renderShooterTiles()
            // renderCanon()
            loginArea.innerText = ""
        }) 
    })
}
    // })