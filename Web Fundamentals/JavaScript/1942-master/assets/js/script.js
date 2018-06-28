var hero = {
    x: 300,
    y: 400
}
var score = 5000;
var num = 50;
var enemies = [
    {x: 50, y: 50}, 
    {x: 250, y: 60},
    {x: 450, y: 40}, 
    {x: 550, y: 80}, 
    {x: 650, y: 90},
    {x: 750, y: 30},
    {x: 850, y: 50}
];

var bullets = [];

function displayHero(){
    document.getElementById('hero').style['top'] = hero.y + "px";
    // document.getElementById('hero').style['backgroundColor'] = "yellow";
    document.getElementById('hero').style['left'] = hero.x + "px";
}

function displayEnemies(){
    var output = '';
    for (var i=0; i < enemies.length; i++){
        if (num == score || num < score){
            output += "<div id='enemy1' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";        
        }
        if (num > score){            
            output += "<div id='enemy2' style='top:"+enemies[i].y+"px; left:"+enemies[i].x+"px;'></div>";
        }
        // 
    //     console.log(score)
    //     console.log(num)        
    }
    document.getElementById('enemies').innerHTML = output;
}

function displayBullets(){
    var output = '';
    for (var i=0; i < bullets.length; i++){       
            output += "<div class='bullet' style='top:"+bullets[i].y+"px; left:"+bullets[i].x+"px;'></div>";
    }			
    
    document.getElementById('bullets').innerHTML = output;
}

function moveEnemies(){
    for (var i = 0; i < enemies.length;i++){
        enemies[i].y += 5;
        if (enemies[i].y > 540){	
            enemies[i].y = 0;
            enemies[i].x = Math.floor(Math.random()*750);
        }
    }		
}
function movingBullet(){
    for (var i = 0; i < bullets.length;i++){
        bullets[i].y -= 5;
        if (bullets[i].y < 0){
            bullets.shift();
          
        }				
    }	
}

function changeBackground(){
    if (score > 50){        
        document.getElementById('container').style.background = "url('background2.jpg')";
    }
    if (score > 100){        
        document.getElementById('container').style.background = "url('background3.jpg')";
    } 
    if (score > 200){        
        document.getElementById('container').style.background = "url('background.jpg')";
    } 
    if (score > 300){        
        document.getElementById('container').style.background = "url('background2.jpg')";
    } 
    if (score > 400){        
        document.getElementById('container').style.background = "url('background3.jpg')";
    } 
    if (score > 500){        
        document.getElementById('container').style.background = "url('background.jpg')";
    } 
}

function gameLoop(){			
    displayHero();
    moveEnemies();
    displayEnemies();
    movingBullet();
    displayBullets();
    detectCollision();
    changeBackground();
    target();        	
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function target(){
   document.getElementById('enemy1').style.backgroundColor = 'yellow';
}

function detectCollision(){
    
    for (var i = 0; i< bullets.length; i++){
        for (var j = 0; j < enemies.length; j++){
            if (bullets[i] != undefined && enemies[j] !== undefined && Math.abs(bullets[i].x - enemies[j].x) < 20 && Math.abs(bullets[i].y - enemies[j].y) < 20  ){
                bullets.shift();                                   
                enemies.shift();
                score+=10;
                displayScore();
                console.log("collision - bullet");             
                return true;             
            }
    
            else if (bullets[j] != undefined && enemies[j] !== undefined && Math.abs(hero.x - enemies[j].x) < 20 && Math.abs(hero.y - enemies[j].y) < 20  ){
                enemies.shift();              
                score-=500;
                displayScore();
                console.log("collision - hero");                               
                return true;
            }
        }         
    }
}


if (score > 20){ 
    document.getElementById("container").style.background = "url('background2.jpg')";
}



console.log(detectCollision());

setInterval(gameLoop, 20);

document.onkeydown = function(e){
    if(e.keyCode == 37){
        hero.x -= 10;
    } 
    else if(e.keyCode == 39){
        hero.x += 10;  
    }
    else if(e.keyCode == 38){
        hero.y -= 10;
    } 
    else if(e.keyCode == 40){
        hero.y += 10;  
    }
    else if (e.keyCode == 32){
        bullets.push({x: hero.x+5,y: hero.y-13});
       
        // console.log(bullets)
        displayBullets();
    
    }
    displayHero();		
}

displayHero();
displayEnemies();
