status = "";
img = "";
object = [];

function setup(){
    canvas = createCanvas(340,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340,340);
    video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
document.getElementById("input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}

function draw(){
    image(video, 0, 0, 340, 340)

    if (status != "")
    {
        objectDetector.detect(video, gotResult);
        for ( i=0; i < objects.length; i++){
            fill("#FF0000")
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

if(objects[i].label == object_name)
{
    video.stop();
    objectDetector.detect(gotResult);
    document.getElementById("object_status").innerHTML = object_name + "Found";
    synth = window.speechSynthesis;
    utterhis = new SpeechSynthesisUtterance(object_name + "Found");
    synth.speak(utterThis);
}
else
{
    document.getElementById("object_status").innerHTML = object_name + " Not Found";
}

function gotResult(error, results){
    if (error) {
       console.log(error);
    }
    console.log(results); 
    objects = results;
}