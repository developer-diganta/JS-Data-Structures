module.exports = class DoubleReferencedNode{
    constructor(data,next=null,prev=null) {
        this.data=data;
        this.next=next;
        this.prev=prev||this.next;
    }
}