function setup(){
    canvas = createCanvas(620, 620);
    canvas.position(811, 78); 

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FFFFFF');
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}