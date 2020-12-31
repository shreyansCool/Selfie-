var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition(); 

function start() { 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
 }

 recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0] [0] . transcript;

document.getElementById("textbox").innerHTML = Content;

console.log(Content);
speak();
 }


 function speak() {
  Var synth= windows.speechSynthesis;


  speak_data = document.getElementById("Textbox").value;


  var utterthis = SpeechSynthesisUtterance(speak_data);

  
  synth.speak(utterthis);
  Webcam.attach(camera)
 }

 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
 camera = document.getElementById("camera")