class Stack{

    constructor(){
        this.data = {};
        this.top =-1;
    }

    push(element){
        this.top++;
        this.data[this.topIndex]=element;
    }

    traverse(){
        let output=" ";

        for(let i=0; i<=this.topIndex; i++){
            output += this.data[i] + " ";
        }
        console.log(output);
    }
}

//Stack

stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.traverse();