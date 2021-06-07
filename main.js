status = "";
obj = [];
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();


function setup(){

    canvas = createCanvas(600,500);
    canvas.position(15,15);
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

    if ( status != ""){

        detection.detect(video,gotResults);  
        
        r = random(255);
        g = random(255);
        b = random(255);
    
       for( i=0 ; i < obj.length ; i++){
    
        
        
        document.getElementById("status").innerHTML = "Status : Objects Identified";
        
    
        fill(r,g,b);
        percent = floor(obj[i].confidence * 100);
        text(obj[i].label + " " + percent + "% " ,obj[i].x + 20 , obj[i].y + 20);
        noFill();
        stroke(r,g,b);
        rect(obj[i].x , obj[i].y , obj[i].width , obj[i].height);

        if(obj[i].label == objname){

            video.stop();
            detection.detect(gotResults);  
            document.getElementById("object-found-or-not").innerHTML = objname + "Found!";
            var synth = window.speechSynthesis;
          
            speak_data = "Object Name Mentioned Found.";
          
            var utterThis  = new SpeechSynthesisUtterance(speak_data);
          
            synth.speak(utterThis);
          
          
           }
          
           else{
          
              document.getElementById("object-found-or-not").innerHTML = objname + "Not Found";
          
           }
          
        
    
       }
    
    }

}


function gotResults(results,error){
  
 if(error){

   console.log();

 }

  else{

    console.log(results);
    obj = results;

  }

}







