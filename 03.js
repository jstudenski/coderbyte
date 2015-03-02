 // Using the JavaScript language, have the function LongestWord(sen) take the
 // sen parameter being passed and return the largest word in the string. If
 // there are two or more words that are the same length, return the first word
 // from the string with that length.Ignore punctuation and assume sen will not
 // be empty. 


function LongestWord(sen) { 

	var myArray = sen.split(' ');
	var longest = 0;
	var longestword = '';

	    myArray.forEach(function(i) {
	        if (i.length > longest) {
	                longest = i.length;
	                longestword = i;
	        }
	    });
	    
	    return longestword;        
}
   

if(LongestWord("hello jk jjjjjj afaew fwe af") == "jjjjjj") {console.log('passed')} else {console.log('failed')};

if(LongestWord("hello world") == 'hello') {console.log('passed')} else {console.log('failed')};

if(LongestWord("a beautiful sentence^&!") == 'beautiful') {console.log('passed')} else {console.log('failed')};

if(LongestWord("letter after letter!!") == 'letter') {console.log('passed')} else {console.log('failed')};

if(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~") == "confusing") {console.log('passed')} else {console.log('failed')};