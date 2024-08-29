let albumCover;
let font;
let song; 
let title= "This Must Be The Place";
let artist= "Talking Heads"; 
let instruction = "Click to Play"
let isPlaying = false; 

function preload(){
  font = loadFont("BungeeTint-Regular.ttf");
  albumCover = loadImage("albumCover.jpg");
  song= loadSound("This Must Be the Place (Naive Melody) (2005 Remaster).mp3")
}


function setup() {
  createCanvas(windowWidth, 700);
  background("pink")
}

function draw() {
  textFont(font);
  textSize(40)
  fill("red")
  text(title, 400, 80)
  text(artist, 490, 550)
  textSize(20)
  text(instruction, 580, 590)
  image(albumCover, 500, 150);
}

function mousePressed(){
  if(isPlaying){
    song.pause(); 
  } else {
    song.play();
  }
  isPlaying = !isPlaying; 
}
