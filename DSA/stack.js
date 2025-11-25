class Stack{

    constructor(){
        this.data = {};
        this.top = -1;
    }

    push(element){
        this.top++;
        this.data[this.top] = element;
    }

    traverse(){
        let output = "";

        for(let i = 0; i <= this.top; i++){
            output += this.data[i] + " ";
        }
        console.log(output.trim());
    }

    is_empty(){
        return this.top === -1;
    }

    size(){
        return this.top + 1;
    }
    peek(){
        if(!this.is_empty()){
            return this.data[this.top];
        }else{
            return null;
        }
    }
    pop(){
    if(!this.is_empty())return nuull;

            let value = this.data[this.topIndex];
            delete this.data[this.topIndex];
            this.top--;
            return value;
    
    }
}

//Stack
const stack1 = new Stack();

console.log(stack1.is_empty()); //true
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);
stack1.push(60);
stack1.traverse();
console.log("The Current size is "+stack1.size()); //3
console.log("Top element is " + stack1.peek()); //30
console.log("Top element is " + stack1.pop()+ " is popped, the new top element is"); //30
console.log("The new stack size is  " + stack1.size()); //20