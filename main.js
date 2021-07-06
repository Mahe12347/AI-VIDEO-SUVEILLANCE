video="";
status="";
objects=[];
function preload(){
video=createVideo('video.mp4');
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
    if(status !="")
    {
        objectDetecter.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:objects Detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detcted are :"+ objects.length;

            fill("#FF0000");
            percent=floor(objects[i.confidence* 100]);
            text(objects[i].label = " "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            Rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
function start(){
    objectDetecter=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}
function modelLoaded(){
    console.log(modelLoaded);
    video.loop();
    video.speed(1);
    video.sound(0);

}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}}
