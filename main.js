Webcam.set({
    width:400,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id = "capture_image" src = "'+data_uri+'"/>';
    });
        
    
}
console.log("ml5 version: ",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YS1hx32eM/model.json',model_ready);
function model_ready(){
    console.log("Model is ready")
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
r1 = results[0].confidence*100;
r2 = r1+"%"
console.log(r2);
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2)*100 + "%";
    }
    

}
