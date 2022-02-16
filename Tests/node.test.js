const Node = require("../Node/Node");

const sample1 = new Node(12);
test("Testing for node object creation with only data value passed",() => {
    expect(sample1).toEqual({data:12,next:null});
});