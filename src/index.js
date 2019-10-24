

    const gameBoard = document.querySelector('.game-board')
    const shooter = document.querySelector('.shooter')
    const matrixUrl = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
    const loginArea = document.querySelector('.login')
    
    let score = 0 

    const scoreShow = document.querySelector('.score')
    scoreShow.insertAdjacentHTML('beforeend',`<h2>Score: ${score}</h2>`)
    
    function renderShooterTiles(){
        let currentNum
        let shooterTileArray = []
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
        console.log("clearing vert")
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
    let z = document.getElementById('60')
    let ranTile = ['https://i.imgur.com/tnuhsYy.png', 'https://i.imgur.com/SrvkkhV.png', 'https://i.imgur.com/aSU28qw.png', 'https://i.imgur.com/JyxRnjJ.png']
    let currentCannonPosition = 60
    ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]
    let imgSrc = `<img src="${ranCannonImage}" class="pictures">`
    z.innerHTML = imgSrc

    function emptyBox(num){
        document.getElementById(num).innerHTML = `<img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class="pictures">`
     }
     //fill next cannon
     function fillBox(num){
        document.getElementById(num).innerHTML = `<img src=${ranCannonImage} class="pictures">`
     }
     


    
     

    let id = setInterval(slide, 150)
    let direction = 'left'


    function slide() {
        emptyBox(currentCannonPosition)
        if (currentCannonPosition == 60) {
            direction = 'left'
        }
        if (currentCannonPosition == 51) {
            direction = 'right'
        }
        if (currentCannonPosition < 51) {
            currentCannonPosition = 60
            slide()
        }
        if (direction === 'right') {
            currentCannonPosition++
        } else {
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
                    currentCannonPosition = 60
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
                    gameBoard.innerHTML = "YOU LOST. You're fired. " 
                }

                    // clearTilesVertical()
                    // clearTilesHorizontal()
                    // shiftTilesUp()
            }//end of first if
        // }//END OF LAST IF
    }//end of shoot function
    
    function listenForSpaceBar(){
    let oldTime = 0
        document.addEventListener("keydown", (event) => {
            
            if ((event.timeStamp - oldTime) > 175 && event.code === "Space") {
                // debugger
                oldTime = event.timeStamp
            
            shoot()
            clearInterval(id)
            ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]
            
            fillBox(60)
            
        }
    
    })
    }
     listenForSpaceBar()

//---------- INSERTED EUGENIA'S CODE -----------------//

function loginOrSignUp(){
    loginArea.insertAdjacentHTML('beforeend', 
    `<button id="login" type="button">Login</button>
    <button id="sign-up" type="button">Sign Up</button>
    `)
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
    return fetch('http://localhost:3000/api/v1/sessions', {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accepts":"application/json"
        },
        body: JSON.stringify({
            user: user
        })
    })
    .then(response => json())
    .then(console.log(data))
}

document.addEventListener('DOMContentLoaded', function(event){
    loginOrSignUp()
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
            fetch('http://localhost:3000/api/v1/users', {
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
            login(username)
            debugger
            
        })
    })    
    loginBtn.addEventListener('click', function(event){
        loginArea.innerText = "" 
        renderLoginForm()
        loginArea.addEventListener('submit', function(event){
            event.preventDefault()
            let user = document.querySelector('input').value 
            login(user) 
            renderShooterTiles()
        }) 
    })
})