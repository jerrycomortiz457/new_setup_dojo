// List of features to MSBlobBuilder
// 1) Have JS display the world of brick/coin/etc
// 2) Have the pacman move up and down

var world = [
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,1,5,5,1,1,2,2,1,1,5,5,5,1,1,2,1,5,5,1,1,1,2,2,1,1,1,1,1,4],
    [4,1,5,1,1,1,1,1,1,2,1,5,1,1,5,1,1,1,5,1,5,1,2,1,1,1,1,1,1,1,4],
    [4,1,5,1,1,1,2,1,1,2,1,1,1,1,5,1,2,1,5,1,5,1,2,1,2,2,1,1,1,1,4],
    [4,1,5,1,1,1,2,1,1,2,1,5,1,1,5,1,2,1,5,1,5,1,2,1,1,2,1,1,1,1,4],
    [4,1,1,5,5,1,1,2,2,1,1,5,5,5,1,1,2,1,5,1,5,1,1,2,2,1,1,1,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,2,2,2,1,1,1,5,5,1,1,1,1,1,2,1,1,5,5,1,1,1,2,1,1,2,2,1,1,4],
    [4,1,2,1,1,2,1,1,1,1,5,1,1,1,1,2,1,1,1,1,5,1,2,1,1,2,1,1,2,1,4],
    [4,1,1,1,1,2,1,5,1,1,5,1,2,1,1,2,1,5,1,1,5,1,1,2,1,1,1,2,1,1,4],
    [4,1,2,1,1,2,1,5,1,1,5,1,2,1,1,2,1,5,1,1,5,1,1,1,2,1,2,1,1,1,4],
    [4,1,2,2,2,1,1,1,5,5,1,1,1,2,2,1,1,1,5,5,1,1,1,1,1,2,1,1,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],   
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    
    
];

var score = 0;
var num = 300;
var pacman = {
    x: 1,
    y: 1
};

var cyanghost = { x: 13,y: 4 }, redghost = { x: 4,y: 10 }, pinkghost = { x: 3,y: 10 }, orangeghost = { x: 12,y: 4 } ;

var cherry = {
    x:15,
    y:7
}

function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2)
                output += "<div class='redwall'></div>";
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            if (world[i][j] == 4)
                output += "<div class='brick'></div>";
            if (world[i][j] == 5)
                output += "<div class='bluewall'></div>";
        }
        output += "</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayCherry(){   
    world[cherry.y][cherry.x] = 3; 
}

function summonGhost(){
    document.getElementById('cyanghost').style.top = cyanghost.y*20+"px";
    document.getElementById('cyanghost').style.left = cyanghost.x*20+"px";
    document.getElementById('redghost').style.top = redghost.y*20+"px";
    document.getElementById('redghost').style.left = redghost.x*20+"px";
    document.getElementById('pinkghost').style.top = pinkghost.y*20+"px";
    document.getElementById('pinkghost').style.left = pinkghost.x*20+"px";
    document.getElementById('orangeghost').style.top = orangeghost.y*20+"px";
    document.getElementById('orangeghost').style.left = orangeghost.x*20+"px";
}

displayWorld();
displayPacman();
summonGhost();

document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 && world[pacman.y][pacman.x-1] != 5 && world[pacman.y][pacman.x-1] != 4){
       pacman.x--;
       document.getElementById("pacman").style.transform = "rotate(180deg)";
    }
   
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2 && world[pacman.y][pacman.x+1] != 5 && world[pacman.y][pacman.x+1] != 4){
        pacman.x++;
        document.getElementById("pacman").style.transform = "rotate(0deg)";
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2 && world[pacman.y+1][pacman.x] != 5 && world[pacman.y+1][pacman.x] != 4){
        pacman.y++;
        document.getElementById("pacman").style.transform = "rotate(90deg)";
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 && world[pacman.y-1][pacman.x] != 5 && world[pacman.y-1][pacman.x] != 4){
        pacman.y--;
        document.getElementById("pacman").style.transform = "rotate(270deg)";
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    if (num == score || num < score){
        num = num + 300;       
        displayCherry();        
    }
       // console.log(e.keyCode);
    displayPacman();   
}