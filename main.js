song="";
song2="";

function preload() {
    song= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}


function setup() {
    canvas=createCanvas(700,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    p=ml5.poseNet(video,u);
    p.on('pose',ans10); 
}

function draw() {
    image(video,0,0,700,500);
}

function u() {
    console.log('posenet is on');
}

function ans10(result) {
    if (result.length>0) {
        console.log(result);
        lwx=result[0].pose.leftWrist.x;
        lwy=result[0].pose.leftWrist.y;
        rwx=result[0].pose.rightWrist.x;
        rwy=result[0].pose.rightWrist.y;    
        lw=result[0].pose.keypoints[9].score;
        rw=result[0].pose.keypoints[10].score;
        console.log("Left x is- " + lwx  ,"Left y is- " + lwy , "Score is - " +lw);
        console.log("Right x is- " + rwx ,"Right y is- " + rwy , "Score is - " +rw);
    }
}