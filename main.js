noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/rsB8rmky/mustache-png-d-by-anlli3-on-deviantart-2.png");
}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on("pose", poses_start_it);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    image(video, 0, 0, 400, 300);
    image(mustache, noseX, noseY, 100, 100);
}
function save_snap(){
    save("Mustache funny image with mustace.png");
}
function poses_start_it(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-170;
        noseY = results[0].pose.nose.y-135;
        console.log(noseX + " + " + noseY);
    }
}