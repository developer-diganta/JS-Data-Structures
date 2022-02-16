const LinkedList = require("../Linked List/LinkedList");


describe("Linked List Testing",()=>{
    it("Testing for linked list creation",() => {
        const sample1 = new LinkedList();
        expect(sample1).toEqual({head:null,tail:null,size:0});
    });

    it("Pushing at start of linked list",()=>{
        const sample1 = new LinkedList();
        sample1.pushAtStart("1");
        expect(sample1).toEqual({head:{data:"1",next:null},tail:{data:"1",next:null},size:1});
    })

    it("Pushing at end of linked list",()=>{
        const sample1 = new LinkedList();
        sample1.pushAtStart(1);
        sample1.pushAtEnd(2);
        expect(sample1).toEqual({head:{data:1,next:{data:2,next:null}},tail:{data:2,next:null},size:2});
    })
});
