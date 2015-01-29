$(document).on('ready', function() {
  
});

var Fatality = {
	target: "Sub Zero",
	move: "Get Over Here!",
	name: "Scorpion"
	};

var	getName = function(object){
	return object.name
};

console.log(getName(Fatality));

 var letters = ["Sion", "is", "Awesome", "at", "functions"]
 
 var totalLetters = function(array) {
 	var answer = 0;
 	array.forEach(function(str) {
 		answer += str.length;
 	})
 	return answer;
 }

 console.log(totalLetters(letters));

 var keyValue = function(key , value) {
 	var object = {
 		
 	}
 	object[key] = value;

 	return object;
 }

 console.log(keyValue('charlieSheen' , 'Winning'));

var negativeIndex = function(array, negNum) {
	var arraySelecion = array.length + negNum;

	return array[arraySelecion];
}

console.log(negativeIndex(letters, -1));

var removeM = function(string) {
	var mLess= ""
	for (i=0; i < string.length; i++) {
		if (string[i] != 'm' && string[i] != 'M')
			mLess += string[i]

	}
	return mLess;

}

console.log(removeM("Many Mumbling Mice are Making Midnight Music in the Moonlight"))



var printObject = function(object) {
	var whatWeGonnaPrint = ""
	var arkey= Object.keys(object)
	for (i = 0; i<arkey.length;i++){
		whatWeGonnaPrint += arkey[i] + " is " + object[arkey[i]] + "\n";
	}
	return whatWeGonnaPrint
}

console.log(printObject(Fatality))



	var acceptableLetters = {
		A: null,
		E: null,
		I: null,
		O: null,
		U: null
	};

var makeadavowel = function(letter){
	var upLetter = letter.toUpperCase();
	if (upLetter in acceptableLetters){
		return true;	
	}
	else{
		return false;
	}

}


var vowels = function(string) {
	var stringToArray = string.split("")
	console.log(stringToArray);
	var arrayOfVowels = stringToArray.filter(makeadavowel);
	console.log(arrayOfVowels);
}

vowels("alabama");

var twins= function(array) {
	var a= 0;
	var b= 1
	for (var i= 0 ; i< (array.length/2); i++){
		if (array[a] != array[b]){
			return false;
		}
		a+=2
		b+=2
	}
	return true;
}
var twinsArray = ['a', 'a', 'b', 'b']

console.log(twins(twinsArray))

var boolarr = [false, false, false, false]

var or= function(array){
	for (var i = 0; i< array.length; i++)
		if (array[i]){
			return true;
		}
		return false;
}

console.log(or(boolarr))

var stringArr = ["booyah", "something", "weeeeeee"]

var unique = function(array){


}

















