document.addEventListener('DOMContentLoaded', function(event){


    const gameBoard = document.querySelector('.game-board')
    const shooter = document.querySelector('.shooter')
    
    function renderShooterTiles(){
        let shooterTileArray = []
        for(i=0; i<60; i++) {
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
                for (j=0; j<10; j++){
                    // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box"><img src=${shooterTileArray[j].image_url} class ="pictures" data-row="A" data-tileNumber=${j+1}></div>
                    `)
                }//end of j for

                for (k=10; k<20; k++){
                    // let targetTile = document.querySelector('.box').dataset.tileNumber[j]
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box"><img src=${shooterTileArray[k].image_url} class ="pictures" data-row="B" tileNumber=${k+1}></div>
                    `)
                }//end of k for
                
                for(l=20; l<60; l++){
                    gameBoard.insertAdjacentHTML('beforeend', `
                    <div class="box"><img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp" class ="pictures data-row="C" data-tileNumber=${l+1}>
                    `)
                }//end of l for
                // for(m=12; m<24; m++){
                //     gameBoard.insertAdjacentHTML('beforeend', `
                //     <div class="box"><img src="https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp" class ="pictures data-row="D" data-tileNumber=${m+1}>
                //     `)
                // }//end of m for
                
        console.log(shooterTileArray)
        return shooterTileArray
    }//end of shooter function
    
    renderShooterTiles()

    console.log('RENDERING SHOOTER TILES')


    //when the page loads load the shooter tile array and render on the page
    //then render the tiles randomly on the board in the shooting area
    //render the canon/have it start moving back and forth 




    function clearTilesHorizontal(){
        let allTiles = document.querySelectorAll('.box')

            for(let i=1; i < 9; i++){
                for( j=i ;j<60;j+=10){
                    // debugger
                    if(allTiles[j].querySelector('img').src === allTiles[j-1].querySelector('img').src && allTiles[j].querySelector('img').src === allTiles[j+1].querySelector('img').src ){
                        console.log('it works')
                        allTiles[j-1].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        allTiles[j].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        allTiles[j+1].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        // debugger
                    }//end of if
                }//end of for j
            } // end of i

        // for(i=2;i<60;i+=10){
        //     // debugger
        //    if(allTiles[i].querySelector('img').src === allTiles[i-1].querySelector('img').src && allTiles[i].querySelector('img').src === allTiles[i+1].querySelector('img').src ){
        //         console.log('it works')
        //         allTiles[i-1].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
        //         allTiles[i].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
        //         allTiles[i+1].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
        //         // debugger
        //    }//end of if
        // }//end of for i
    } //end of clearTilesHorizontal

    clearTilesHorizontal()


    function clearTilesVertical(){
        let allTiles = document.querySelectorAll('.box')
        for(i=11; i<50; i+=10){
            for(j=i;j<8;j++){
                // debugger
                if(allTiles[j].querySelector('img').src === allTiles[j-10].querySelector('img').src && allTiles[j].querySelector('img').src === allTiles[j+10].querySelector('img').src ){
                        console.log('it works')
                        allTiles[j-10].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        allTiles[j].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        allTiles[j+10].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                        // debugger
                }//end of if
            }//end of for j
        }//end of for i

    //     for(i=8;i<12;i++){
    //         // debugger
    //        if(allTiles[i].querySelector('img').src === allTiles[i-4].querySelector('img').src && allTiles[i].querySelector('img').src === allTiles[i+4].querySelector('img').src ){
    //             console.log('it works')
    //             allTiles[i-4].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
    //             allTiles[i].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
    //             allTiles[i+4].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
    //             // debugger
    //        }//end of if
    //     }//end of for i
    } //end of clearTilesVertical
    clearTilesVertical()

    function shiftTilesUp(){
        let allTiles = document.querySelectorAll('.box')
        for(i=11; i<61; i++)
            if(allTiles[i].querySelector('img').src !== "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp" && allTiles[i-10].querySelector('img').src === "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"){
                // debugger
                let personImage = allTiles[i].querySelector('img').src
                // debugger
                allTiles[i-10].querySelector('img').src = personImage
                // debugger
                allTiles[i].querySelector('img').src = "https://media2.giphy.com/media/sULKEgDMX8LcI/giphy.webp?cid=790b76110dac576cf6e7cca7a3097cf9ba5cd5dcd4d2e185&rid=giphy.webp"
                // debugger
            }

    }///end of tile shift up

    shiftTilesUp()

    
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