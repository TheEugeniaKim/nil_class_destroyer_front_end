let box
let gameBoard = document.querySelector('.game-board')
let colors = ["red", "blue", "green"]
let initial_color = "empty"
let blue = "blue"
let top_row
let mid_row
let bottom_row
let cannon_row
let currentCannonPosition = "12"
let currentCannonColor 

function shoot(){
    if (document.getElementById(`${currentCannonPosition - 3}`).className === "box empty"){
        currentCannonColor = document.getElementById(`${currentCannonPosition}`).className
        console.log(currentCannonPosition)
        console.log(currentCannonColor)
        
        document.getElementById(`${currentCannonPosition}`).className = "box empty"
        document.getElementById(`${currentCannonPosition - 3}`).className = currentCannonColor
        currentCannonPosition -= "3"
        currentCannonColor = document.getElementById(`${currentCannonPosition}`).className
        console.log(currentCannonPosition)
        console.log(currentCannonColor)
        shoot()
    }else{
        console.log(currentCannonPosition)
        console.log(currentCannonColor)

    }
    



}





top_row = 
[`<div id="1" class="box ${colors[Math.floor(Math.random() * colors.length)]}"></div>`,
`<div id="2" class="box ${colors[Math.floor(Math.random() * colors.length)]}"></div>`,
`<div id="3" class="box ${colors[Math.floor(Math.random() * colors.length)]}"></div>`];
mid_row = 
[`<div id="4" class="box ${initial_color}"></div>`,
`<div id="5" class="box ${initial_color}"></div>`,
`<div id="6" class="box ${initial_color}"></div>`];

bottom_row = 
[`<div id="7" class="box ${initial_color}"></div>`,
`<div id="8" class="box ${initial_color}"></div>`,
`<div id="9" class="box ${initial_color}"></div>`];
cannon_row = 
[`<div id="10" class="box empty"></div>`,
`<div id="11" class="box empty"></div>`,
`<div id="12" class="box red"></div>`];

function load_board(){
    top_row.forEach((element)=> {
        gameBoard.insertAdjacentHTML("beforeend", element)
    })
    mid_row.forEach((element)=> {
        gameBoard.insertAdjacentHTML("beforeend", element)
    })
    bottom_row.forEach((element)=> {
        gameBoard.insertAdjacentHTML("beforeend", element)
    })
    cannon_row.forEach((element)=> {
        gameBoard.insertAdjacentHTML("beforeend", element)
    })


}
load_board()



/////WHEN SPACE IS HIT

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        // PAUSE CANNON
        shoot()
       
    }
}) //end of event listener


// INFINITE LOOP
// let intervalID = setInterval(e => {
//     console.log("hi");
//   }, 100);
//   document.addEventListener("keydown", e => {
//       if(e.code === "Space"){
//     clearInterval(intervalID)};
// });
