var world = [
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,1,5,5,1,1,2,2,1,1,5,5,5,1,1,2,1,5,5,1,1,1,2,2,1,1,1,1,1,4],
    [4,1,5,1,1,1,1,1,1,2,1,5,1,1,5,1,1,1,5,1,5,1,2,1,1,1,1,1,1,1,4],
    [4,1,5,1,1,1,2,1,1,2,1,1,6,6,5,1,2,1,5,1,5,1,2,1,2,2,1,1,1,1,4],
    [4,1,5,1,1,1,2,1,1,2,1,5,1,1,5,1,2,1,5,1,5,1,2,1,1,2,1,1,1,1,4],
    [4,1,1,5,5,1,1,2,2,1,1,5,5,5,1,1,2,1,5,1,5,1,1,2,2,1,1,1,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,2,2,2,1,1,1,5,5,1,1,1,1,1,2,1,1,5,5,1,1,1,2,1,1,2,2,1,1,4],
    [4,1,2,1,1,2,1,1,1,1,5,1,1,1,1,2,1,1,1,1,5,1,2,1,1,2,1,1,2,1,4],
    [4,1,1,6,6,2,1,5,1,1,5,1,2,1,1,2,1,5,1,1,5,1,1,2,1,1,1,2,1,1,4],
    [4,1,2,1,1,2,1,5,1,1,5,1,2,1,1,2,1,5,1,1,5,1,1,1,2,1,2,1,1,1,4],
    [4,1,2,2,2,1,1,1,5,5,1,1,1,2,2,1,1,1,5,5,1,1,1,1,1,2,1,1,1,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],   
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    
    
];

var score = 0;
var num = 300;
var pacman = {
    x: 15,
    y: 7
};

var cyanghost = { x: 13,y: 4 }, redghost = { x: 4,y: 10 }, pinkghost = { x: 3,y: 10 }, orangeghost = { x: 12,y: 4 };

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
            if (world[i][j] == 6)
                output += "<div id='orangeghost'></div>";           
        }
        output += "</div>";
    }
  
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

function resuPacman(){   
    pacman = { x: 15, y: 7 };
    document.getElementById("pacman").style.backgroundImage = "url('pacman.gif')";
    document.getElementById('pacman').style.display = "block";    
    displayPacman();  
}

displayWorld();
displayPacman();


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
   
    if(world[pacman.y][pacman.x] == 6){   
        console.log('Dead!');
        document.getElementById("pacman").style.backgroundImage = "none";
        document.getElementById("pacman").style.backgroundImage = "url('deadpacman.gif')";        
        setTimeout(resuPacman, 2000);
        return true;         
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
    displayPacman();   
}