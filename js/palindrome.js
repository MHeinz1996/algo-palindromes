exports.palindrome = function(word) {
    const regex = /[^A-Za-z0-9]/g;  //regex to replace all non-alphanumeric characters in a string
    let splitStr = word.toString().split(''); //Split string into separate characters
    let palindrome = false;
  
    // For loop to remove non-alpha characters from string
    for(let i=0; i<splitStr.length; i++) {
        splitStr[i] = splitStr[i].replace(regex, '');
    }
  
    word = splitStr.join('').toLowerCase();  //combine letters into a lowercase string
  
    for(let i=0; i<word.length; i++) {  //for loop to compare letters at each end to see if they match
      j = word.length - (i+1);
      if(word[i] == word[j]) {
        palindrome = true;
      } else {
        palindrome = false;
        break;
      }
    }
    
    return palindrome;  
};

console.log(exports.palindrome(434));