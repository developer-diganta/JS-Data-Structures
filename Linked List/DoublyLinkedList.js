const DoublyNode = require("../Node/DoubleReferencedNode");
module.exports = class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.size=0;
    }

    pushAtStart(data){
        const temp = new DoublyNode(data, null,null);
        temp.next = this.head;
        if(this.head!==null)
            this.head.prev=temp;
        this.head=temp;
        this.size+=1;
    }

    pushAtEnd(data){
        if(this.head===null){
            this.pushAtStart(data);
            return;
        }
        let temp = this.head;
        while(temp.next){
            temp=temp.next;
        }
        const node = new DoublyNode(data,null,temp);
        temp.next = node;
        this.size+=1;
    }
    push(data,index){
        if(index === 0){
            this.pushAtStart(data);
            return;
        }
        let temp = this.head;
        for(let i=0;i<index-1;i++){
            temp=temp.next;
        }
        const node = new DoublyNode(data,temp.next,temp);
        temp.next=node;
        node.next.prev = node;
    }

    popAtStart(){
        if(this.size===1){
            const val = this.head.data;
            this.head = null;
            // this.head = this.head;
            return val;
        }
        const val = this.head.data;
        this.head = this.head.next;
        this.head.prev = null;
        this.size-=1;
        return val;
    }

    popAtEnd(){
        if(this.size===1){
            return this.deleteAtStart();
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        const val = temp.data;
        temp.prev.next = null;
        this.size-=1;
        return val;
    }


    pop(index){
        let temp = this.head;
        if(index === 0){
            return this.deleteAtStart();
        }
        if(index === this.size-1){
            return this.deleteAtEnd();
        }
        for(let i=0;i<index-1;i++){
            temp=temp.next;
        }
        const val = temp.next.data;
        temp.next = temp.next.next;
        temp.next.prev = temp;
        return val;
    }

    print(isReverse=false){
        let temp = this.head;
        if(!isReverse) {
            while (temp) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
        else{
            while (temp.next) {
                temp = temp.next;
            }
            // console.log(temp.prev)
            while(temp){
                console.log(temp.data);
                temp=temp.prev;
            }
        }
    }
}