//Ascending order
i = 1;

do{
    console.log(i);
    i++;
}while(i<=5);

console.log("-----");
//descending order
i = 5;

do{
    console.log(i);
    i--;
}while(i>=1);

//Oneline Ascending order
output ="Oneline Ascending order ";
i=1;

do{
    output += i + " ";
    i++;
}while(i<=5);
console.log(output);

console.log("-----");
//Oneline Descending order
output ="Oneline Descending order ";
i=5;

do{
    output += i + " ";
    i--;
}while(i>=1);
console.log(output);

//Array traversal
arr=[1,4,3];
output="Array traversal ";
i=0;
do{
    output += arr[i] + " ";
    i++;
}while(i<arr.length);
console.log(output);

//Array traversal in reverse
output="Array traversal in reverse ";
i=arr.length -1;
do{
    output += arr[i] + " ";
    i--;
}while(i>=0);
console.log(output);