/*  1. Write a for loop that prints numbers from 1 to 5 in the console.

for(i=1 ;i<=5 ;i++){
    console.log(i);
}


output =" ";

for(i=1 ;i<=5 ;i++){
    output += i + " ";
}
console.log(output);



output =" ";

for(i=5 ;i>=1 ;i--){
    output += i + " ";
}
console.log(output);


reverse="";
str="LAWRENCE";

for(i=str.lenghth-1; i>=0; i--){
    reverse += str[i];
}
console.log(reverse);


output = " ";
arr = [1,4,3];

for(i=0; i<arr.length; i++){
    output += arr[i] + " ";
}
console.log(output);
*/


    arr1 = [1,4,3];
    arr2 = ["L","A","W","R","E","N","C","E"];
    arr3 = [true, false, true, false];
    arr4 = [1,"A", true, 3.14];
    arr5 = [1000000000, 299792458, 6.67430e-11];


function traverseArray(arr){
    output = " ";
    for(i=arr.length-1; i>=0; i--){
        output += arr[i] + " ";
    }
    console.log(output);

}

traverseArray(arr1);
traverseArray(arr2);
traverseArray(arr3);
traverseArray(arr4);
traverseArray(arr5);
