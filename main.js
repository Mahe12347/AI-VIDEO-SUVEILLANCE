video=""
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetecter=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
function modelloaded(){
    console.log(modelloaded);
    video.loop();
    video.speed(1);
    video.sound(0);

}