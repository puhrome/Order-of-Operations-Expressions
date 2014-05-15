/**
 * Order of Operaions PEMDAS Created by Phirom Yim on 5/15/14.
 */
//using PEMDAS to calculate quiz grades

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//to get average add the items then divide by the number of items
var sum = quiz1 + quiz2 + quiz3 + quiz4;
console.log(sum);

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;//use parenthesis to do first
console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);
//if you aren't trying to prioritize addition or subtraction first then you don't need ( )