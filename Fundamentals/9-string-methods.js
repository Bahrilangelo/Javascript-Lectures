var intro = "  My name is Bahri Uranli";

var final;

final = intro.toLowerCase();
// Translates all intro characters to lower
final = intro.toUpperrCase();
// Translates all intro characters to upper
final = intro.length;
// Returns intro length
final = intro.slice(0,5);
// Returns intro from 0 to 5
final = intro.substring(0,6);
// Returns intro from 0 to 6
final = intro.replace('Bahri', 'Name');
// Replaces Bahri with Name
final = intro.trim();
final = intro.trimEnd();
final = intro.trimStart();
// Removes spaces from start and end of intro
final = intro.indexOf("Bahri");
// Returns index of Bahri
final = intro.split(" ");
// Splits intro from spaces


console.log(final);