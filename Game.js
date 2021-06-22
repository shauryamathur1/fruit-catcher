class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        if(frameCount % 20 ===0){
            fruit=createSprite(random(100,1000),0,100,100);
            fruit.velocityY =6;
            var rand=Math.round(random(1,5));
            switch(rand){
                case 1:fruit.addImage("fruit1",fruit1_img);
                break;
                case 2: fruit.addImage("fruit1",fruit2_img);
                break;
                case 3: fruit.addImage("fruit",fruit3_img);
                break;
                case 4:fruit.addImage("fruit",fruit4_img)
                break;
                case 4:fruit.addImage("fruit",fruit5_img)
                break;
            }
            fruitGroup.add(fruits)
        }
        for(var plr in allPlayers){
            index=index+1;
            x=500-allPlayers[plr].distance;
            y=500;
            player[index-1].x=x;
            player[index-1].y=y;
            if(index===player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name,x-25,y+25);
            }
        }
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();


        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 

        }


        // Give movements for the players using arrow keys


        // Create and spawn fruits randomly

        
    }

    end(){
       console.log("Game Ended");
    }
}