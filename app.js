'use strict';

alert('Welcome! Lets get to know you!');
var userName = prompt('What is your name?');
alert('Nice to meet you, ' + userName);
console.log('username', userName);
var occupation = prompt('What is it that you do for a living?');
alert('Ok, ' + userName + '.' + ' Must be nice to be a ' + occupation + '.');
console.log('occupation', occupation);
var funStuff = prompt('What do you do for fun?');
alert('Ok, ' + userName + ' who is a ' + occupation + ' .' + funStuff + ' sounds like so much fun!');
console.log('fun stuff', funStuff);
var food = prompt('What do you like to eat?');
alert('Ew, ' + food + ' is gross. Very nice to meet you ' + userName + ' who is a ' + occupation + ' that likes to ' + funStuff);
console.log('food', food);
