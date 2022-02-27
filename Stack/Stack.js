const Node = require("../Node/Node");
module.exports = class Stack{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data){
        const node = new Node(data);
        let temp = this.head;
        if(temp === null){
            this.head = node;
            this.size+=1;
            return;
        }
        while(temp.next){
            temp=temp.next;
        }
        temp.next = node;
        this.size+=1;
    }

    pop(){
        if(this.size===0){
            throw {name : "Deletion from empty stack", message : "Cannot delete when stack size is 0"};
        }
    }

    print(){
        let temp = new Node();
        temp = this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}