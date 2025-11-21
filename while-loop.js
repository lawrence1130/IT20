//reverse
i = 5;

while(i>=1){
    console.log(i);
    i--;
}

//Ascending order
i=1;

while(i<=5){
    console.log(i)
    i++;
}

//Oneline Ascending order
output ="Oneline Ascending order ";
i=1;

while(i<=5){
    output += i + " ";
    i++;
}
console.log(output);

//Oneline Descending order
output ="Oneline Descending order ";
i=5;
while(i>=1){
    output += i + " ";
    i--;
}
console.log(output);

//Array traversal
arr=[1,4,3];
output="Array traversal ";
i=0;

while(i<arr.length){
    output += arr[i] + " ";
    i++;
}
console.log(output);