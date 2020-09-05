//1.To find particular character in a string
console.log("Program 1: ");
let str = "Pineapple";
console.log(str);
console.log(str.indexOf("e"));
console.log("Program 1 ends here");
console.log("...............................");

//Q2. Program to convert minutes to seconds
console.log("Program 2: ");
let minutes = 30;
seconds = minutes * 60;
console.log("Program to convert minutes to seconds");
console.log("30 " + "minutes " + " in seconds is " + seconds+ "Seconds");
console.log("Program 2 ends here");
console.log("...............................");

//Q3. Program to search element in a array of strings
console.log("Program 3: ");
var array = [-15, -26, 37, -48, -59];
var fruits = ["Mango", "Orange", "Apple", "Blueberry"];
var n = fruits.includes("Mango");
console.log("Does mango appear in the array list? : "+ n);
console.log("Program 3 ends here");
console.log("...............................");

//Q4. Program to display only elements containing 'a' in the term of array
console.log("Program 4: ");
arr=["Apple", "Banana", "Mango","Cherry"];
console.log("Given array is: "+arr);
for (i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf('Banana') > -1)
    {
        console.log("Banana found inside array");
    }
} 
console.log("Program 4 ends here");
console.log("...............................");


//Q5. Print an array in reverse order
console.log("Program 5: ");
Array = ["Mango","Cranberry","Blueberry"];
console.log("Array input by the user: ");
console.log(Array);
Array = ["Mango","Cranberry","Blueberry"].reverse();
console.log("Array in reverse: ");
console.log(Array);
console.log("Program 5 ends here");
console.log("...............................");