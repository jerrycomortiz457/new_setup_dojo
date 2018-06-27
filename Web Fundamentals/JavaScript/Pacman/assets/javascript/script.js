// List of features to MSBlobBuilder
// 1) Have JS display the world of brick/coin/etc
// 2) Have the pacman move up and down

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,1,1,2,2,1,1,2,2,2,1,1,2,1,2,2,1,1,1,2,2,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,2,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,2,1,1,1,1,2],
    [2,1,2,1,1,1,2,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,1,2,1,1,1,1,2],
    [2,1,1,2,2,1,1,2,2,1,1,2,2,2,1,1,2,1,2,1,2,1,1,2,2,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,1,1,2,2,1,1,1,1,1,2,1,1,2,2,1,1,1,2,1,1,2,2,1,1,2],
    [2,1,2,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2,1,1,2,1,1,2,1,2],
    [2,1,1,1,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,1,2,1,1,1,2,1,1,2],
    [2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,1,1,2,1,2,1,1,1,2],
    [2,1,2,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],   
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    
    
];

var score = 0;
var pacman = {
    x: 1,
    y: 1
};
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
                output += "<div class='brick'></div>";
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            if (world[i][j] == 4)
                output += "<div class='cherryTree'></div>";
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

displayWorld();
displayPacman();

document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
       pacman.x--;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        pacman.x++;
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        pacman.y++;
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
        pacman.y--;
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
    if (score != ){
        num =                      
        displayCherry();
    }
       // console.log(e.keyCode);
    displayPacman();   
}