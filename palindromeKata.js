// Write function isPalindrome that checks if a
// given string (case insensitive) is a palindrome.
// In Racket, the function is called palindrome?
// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t
//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

//Solution 1
function isPalindrome(x) {
  // your code here
  x = x.toLowerCase();
  x = x.replace(/\W/g, "");
  return (
    x ===
    x
      .split("")
      .reverse()
      .join("")
  );
}

//Solution 2
const isPalindrome = x => {
  return x
    .split("")
    .reverse()
    .join("")
    .toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
