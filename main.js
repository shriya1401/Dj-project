song1=""
song2=""
song1Status=""
song2Status=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
leftWristScore=0;

function preload(){
 song1=loadSound("Song1.mp3");
 song2=loadSound("Song2.mp3");
}


function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO)
    video.hide();

 poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotPoses);



}

function draw(){
    image(video,0,0,600,600);
    fill('pink');
    song1Status=song1.isPlaying();
    song2Status=song2.isPlaying()
if (leftWristScore>0.2) {
    circle(leftWristX,leftWristY,20);
    song1.stop();
    if (song2Status==false) {
        song2.play();
        document.getElementById('status').innerHTML="song2 is Playing"
        
    }
}
   
}


function play(){
    song.play()
    song.setVolume(1);
    song.rate(1.5);
    

}

function stop(){
    song.stop()
}


function modelloaded(){
    console.log("Model has been loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
       leftWristX= floor(results[0].pose.leftWrist.x);
       leftWristY=floor(results[0].pose.leftWrist.y);
       rightWristX-=floor(results[0].pose.rightWrist.x);
       rightWristY=floor(results[0].pose.rightWrist.y);
       console.log("leftWristX= " + leftWristX);
       console.log("leftWristY=" + leftWristY);
       console.log("rightWristX=" + rightWristX);
       console.log("rightWristY=" + rightWristY);
       leftWristScore=results[0].pose.keypoints[9].score;
    }
}



