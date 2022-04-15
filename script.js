// JavaScript Document

(function(){
	
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var FirstLetter;
	
	for ( var i =0; i < names.length ; i++){
		
		FirstLetter = names[i].charAt(0).toLowerCase();
		
		if (FirstLetter === "j"){
			
		helloSpeaker.speak(names[i]);
			
		}
		
		else {
		ByeSpeaker.speak(names[i]);
		}
		
	}
	

	
})();
	