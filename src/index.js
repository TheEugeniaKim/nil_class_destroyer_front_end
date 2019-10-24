const gameBoard = document.querySelector('.game-board')
const loginArea = document.querySelector('.login')


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

function renderShooterTiles(){
    let shooterTileArray = []
    for(i=0; i<11; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1  
            if (randNum === 1){
                let tile = charlieTile.create('nill_class_destroyer_front_end/bubble_images/charlie_bubble.png')
                 shooterTileArray.push(tile)
                 debugger
            }
            if (randNum === 2){
                let tile = neerajTile.create('nill_class_destroyer_front_end/bubble_images/neeraj_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            if (randNum === 3){
                let tile = simonTile.create('nill_class_destroyer_front_end/bubble_images/simon_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            if (randNum === 4){
                let tile = wilfTile.create('nill_class_destroyer_front_end/bubble_images/wilf_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            debugger
        return shooterTileArray
    }//end of for
}//end of shooter function

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