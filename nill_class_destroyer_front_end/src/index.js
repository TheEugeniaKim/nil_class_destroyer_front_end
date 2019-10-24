let ranTile = ['https://i.imgur.com/tnuhsYy.png', 'https://i.imgur.com/SrvkkhV.png', 'https://i.imgur.com/aSU28qw.png', 'https://i.imgur.com/JyxRnjJ.png']
let currentCannonPosition = 20
let currentCannonImage
const gameBoard = document.querySelector('.game-board')
const shooter = document.querySelector('.shooter')
let ranCannonImage


function shoot(){
    if (document.getElementById(`${currentCannonPosition - 4}`).innerHTML === `<img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&amp;rid=giphy.webp" class="pictures">`) {
    console.log("EMPTY ABOVE")
    // debugger
    currentCannonImage = document.getElementById(`${currentCannonPosition}`).innerHTML
    document.getElementById(`${currentCannonPosition}`).innerHTML = `<img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&amp;rid=giphy.webp" class="pictures">`
    document.getElementById(`${currentCannonPosition - 4}`).innerHTML = currentCannonImage
    currentCannonPosition -= "4"
    currentCannonImage = document.getElementById(`${currentCannonPosition}`).innerHTML
    console.log(currentCannonPosition)
    console.log(currentCannonImage)
    setTimeout(function(){ shoot()}, 100);

} else {
    // console.log(currentCannonPosition)
    // console.log(currentCannonImage)
    currentCannonPosition = 20
    id = setInterval(slide, 150)
    slide()

}}



function renderShooterTiles() {
    let shooterTileArray = []
    for (i = 0; i < 8; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1
        if (randNum === 1) {
            let tile = new charlieTile()
            shooterTileArray.push(tile)
            //  debugger
        }
        if (randNum === 2) {
            let tile = new neerajTile()
            shooterTileArray.push(tile)
            // debugger
        }
        if (randNum === 3) {
            let tile = new simonTile()
            shooterTileArray.push(tile)
            // debugger
        }
        if (randNum === 4) {
            let tile = new wilfTile()
            shooterTileArray.push(tile)
            // debugger
        }
        // debugger
    }//end of for/
    // debugger
    for (j = 0; j < 4; j++) {
        // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
        gameBoard.insertAdjacentHTML('beforeend', `
                    <div id=${j + 1} class="box"><img src=${shooterTileArray[j].image_url} class ="pictures" data-row="A"></div>
                    `)
    }//end of j for

    for (k = 4; k < 8; k++) {
        // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
        gameBoard.insertAdjacentHTML('beforeend', `
                    <div id=${k + 1} class="box"><img src=${shooterTileArray[k].image_url} class ="pictures" data-row="B"></div>
                    `)
    }//end of k for

    for (l = 8; l < 12; l++) {
        gameBoard.insertAdjacentHTML('beforeend', `
                    <div id=${l + 1} class="box" data-row="C"><img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class ="pictures"></div>
                    `)
    }//end of l for
    for (m = 12; m < 16; m++) {
        gameBoard.insertAdjacentHTML('beforeend', `
                    <div id=${m + 1} class="box" data-row="C"><img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class ="pictures"></div>
                    `)
    }//end of m for
    for (n = 16; n < 20; n++) {
        gameBoard.insertAdjacentHTML('beforeend', `
        <div id=${n + 1} class="box" data-row="C"><img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class="pictures"></div>
        `)
    }//end of m for



    console.log(shooterTileArray)
    return shooterTileArray
    }//end of shooter function

renderShooterTiles()





//set cannon to matrix
function emptyBox(num){
    document.getElementById(`${num}`).innerHTML = `<img src=https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp class="pictures">`
}
//fill next cannon
function fillBox(num){
    document.getElementById(`${num}`).innerHTML = `<img src=${ranCannonImage} class="pictures">`
}




fillBox(20)

// 
ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]

function listenForSpaceBar(){
    
    document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        shoot()
        clearInterval(id)
        ranCannonImage = ranTile[Math.floor(Math.random() * ranTile.length)]
        
        fillBox(20)
    }

})
}



let id = setInterval(slide, 150)
let direction = 'left'

function slide(){
    emptyBox(currentCannonPosition)

    if(currentCannonPosition == 20){
        direction = 'left'
    }
    if (currentCannonPosition == 17){
        direction = 'right'
    }
    if(currentCannonPosition < 17){
        currentCannonPosition = 20
        slide()
    }
    if(direction === 'right'){
        currentCannonPosition++
    } else {
        currentCannonPosition--
    }
        
    fillBox(currentCannonPosition)

}


listenForSpaceBar()