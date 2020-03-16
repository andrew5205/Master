// list
// pushStack()
// popStack()
// printArr() - console.dir()


function ArrStack() {
    this.arr = [1,2,3];
}


ArrStack.prototype.pushStack = function(val) {
    this.arr.push(val);
    return this;
}
// ArrStack.prototype.push = function(val) {
//     this.arr[ this.arr.length ] = val;
//     return this;
// }


ArrStack.prototype.popStack = function() {
    this.arr.pop();
    return this
}



ArrStack.prototype.printArr = function() {
    console.dir(this.arr);
}


var myStack = new ArrStack();

myStack.pushStack(4);
// myStack.push(4);
myStack.printArr();             // [ 1, 2, 3, 4 ]

// LIFO - Last-In, First-Out
// myStack.popStack();
myStack.popStack().popStack();
myStack.printArr();
