document.addEventListener('DOMContentLoaded', function(event){


    const gameBoard = document.querySelector('.game-board')
    const shooter = document.querySelector('.shooter')

    let gameBoardArr = [       
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`,
    `<div class="box">`, 
    `<div class="box">`,
    ]
    
    function renderShooterTiles(){
        let shooterTileArray = []
        for(i=0; i<8; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1  
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
                for (j=0; j<4; j++){
                    // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box"><img src=${shooterTileArray[j].image_url} class ="pictures" data-row="A" data-tileNumber=${j+1}></div>
                    `)
                }//end of j for

                for (k=4; k<8; k++){
                    // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box"><img src=${shooterTileArray[k].image_url} class ="pictures" data-row="B" tileNumber=${k+1}></div>
                    `)
                }//end of k for
                
                for(l=8; l<12; l++){
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box" data-row="C" data-tileNumber=${l+1}>
                    `)
                }//end of l for
                for(m=12; m<16; m++){
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box" data-row="D" data-tileNumber=${m+1}>
                    `)
                }//end of m for
                
        console.log(shooterTileArray)
        return shooterTileArray
    }//end of shooter function
    
    renderShooterTiles()

    console.log('RENDERING SHOOTER TILES')


    //when the page loads load the shooter tile array and render on the page
    //then render the tiles randomly on the board in the shooting area
    //render the canon/have it start moving back and forth 




    // function clearTiles(){
    //     ///row A
    //     if
    // }
    
    gameBoard.addEventListener('click', function(event){
        console.log(event)
        // debugger
        
    })//end of gameBoard event listener
    
})// dom content loaded



/* <div class = "game-board">
<div class="box" data-x=1 data-y="A" id="blue"></div>
<div class="box" data-x=2 data-y="A"></div>
<div class="box" data-x=3 data-y="A"></div>
<div class="box" data-x=1 data-y="B"></div>
<div class="box" data-x=2 data-y="B"></div>
<div class="box" data-x=3 data-y="B"></div>
<div class="box" data-x=1 data-y="C"></div>
<div class="box" data-x=2 data-y="C"></div>
<div class="box" data-x=3 data-y="C"></div> 
</div> */


// <div class="shooter">
// <div class="box" data-x=1 data-y="A"></div>
// <div class="box" data-x=2 data-y="A"></div>
// <div class="box" data-x=3 data-y="A"></div>
// </div>