// JavaScript Document
(function (window){
	
	var SpeakWorld = "Hello";
	
	/*var helloSpeaker =  {};
	helloSpeaker.speak = function(name){
		console.log(SpeakWorld + " " + name);
	};*/
    var helloSpeaker = {
	speak: function(name){
		
		console.log(SpeakWorld + " " + name);
	}
	}
		window.helloSpeaker = helloSpeaker;

	
})(window);
