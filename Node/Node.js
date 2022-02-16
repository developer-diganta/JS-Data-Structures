//Node implementation in JS
/*
Structure:
data -> value
next -> holds the next Node
 */
//Test File: Tests/node-test.js

module.exports = class Node{
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}