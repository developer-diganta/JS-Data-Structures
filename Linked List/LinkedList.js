const Node = require("../Node/Node");
module.exports = class LinkedList{
    constructor() {
        this.head = new Node(null,null);
        this.size = 0;
        this.tail = this.head;
    }

    pushAtStart(data){
        const temp = new Node(data,this.head);
        this.head = temp
        if(this.size===0) {
            this.tail = this.head;
        }
        this.size+=1;
    }

    pushAtEnd(data){
        if(this.size===0){
            this.pushAtStart(data);
            return;
        }
        const temp = new Node(data,null);
        this.tail.next = temp;
        this.tail=temp;
        this.size+=1;
    }

    push(data,index){
        if(index === 0 ){
            this.pushAtStart(data);
            return;
        }
        if(index === this.size-1){
            this.pushAtEnd(data);
            return;
        }
        let temp = new Node();
        temp = this.head;
        for(let i=0;i<index-1;i++){
            temp=temp.next;
        }
        let node = new Node(data,temp.next);
        temp.next = node;
        this.size+=1;
    }

    deleteAtLast(){
        if(this.size<=1){
            return this.deleteAtFirst();
        }
        let temp = this.get(this.size-2);
        const val = this.tail.value;
        temp.next = null;
        this.tail=temp;
        this.size-=1;
        return val;
    }

    delete(index){
        if(index === 0){
            return this.deleteAtFirst();
        }

        if(index === this.size-1){
            return this.deleteAtLast();
        }

        let temp = this.get(index-1);
        const val = temp.data;
        temp.next=temp.next.next;
        return val;

    }
    get(index){
        let temp = this.head;
        for(let i=0;i<index;i++){
            temp = temp.next;
        }
        return temp;
    }

    deleteAtFirst(){
        if(this.size===0){
            console.warn("Size of Linked List is 0. Deletion does not delete anything!")
        }
        const val = this.head.data;
        this.head=this.head.next;
        if(this.head === null){
            this.tail = null;
            return  val;
        }
        this.size-=1;
        return val;
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