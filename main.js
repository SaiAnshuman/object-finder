status = "";
obj = [];


function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();
    

}

function FIND(){

 detection = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Identifiying Objects.. ";
 objname = document.getElementById("obj-name-input").value;

}

function modelLoaded(){
 
    console.log("Model Has Been Loaded! Enjoy!");
    status = true;
}

function draw(){

    image(video,0,0,600,500);

}


function gotResults(results){

 obj = results.length;

}


