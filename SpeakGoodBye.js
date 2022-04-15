// JavaScript Document
(function(window){
	
	var SpeakWorld = "Goodbye";
	
	 var ByeSpeaker = {};
      ByeSpeaker.speak = function(name){
		
		console.log(SpeakWorld +" "+ name);
	};
	
	window.ByeSpeaker = ByeSpeaker;
	
})(window);
