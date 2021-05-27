status = "";

function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

}