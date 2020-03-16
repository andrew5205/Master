// list
// addToFront()
// addToEnd()
// removeFromFront()
// printList() -> process.stdout.write(data + " string ")
// * maxToBack() 
// * minToFront()
// removeNode()
// appendAt()
// prependAt()
// partition()



// Object & class
// When you create an object and store it in a local var, the system doesn’t put the object in that memory
// slot the way it does for a number or a boolean.

// It puts a reference to that heap location into your local var. 
// References (called pointers) are fixed-size, so this enables the runtime do its stack magic.

// A pointer represents an object’s location in memory, 
// but you can think of it as an object’s contact info: its email address.

// True to its name, a pointer points to where the object is found. If you have information to
// retrieve from (or store to) an object, 
// you “go there” by dereferencing that pointer, followed by the attribute you want within the object.




// Linked list 
// Linked lists provide a way to store a large amount of information without (as arrays do) forcing the
// runtime to find a large contiguous chunk of memory (as arrays do).

// Linked lists introduce the reference concept – essentially, storing the location of the variable, 
// instead of its value.


// If the linked list is empty, then the value of the head is NULL.


// definition of a node Object
// Each node (object) has two properties: .val, and .next.
// The subsequent node does not know who is pointing to it; all it knows about is its own .next pointer.

// 1. declare a local variable called runner,
// 2. runner = runner.next;   //To update runner to point to the next node
// 3. this.head = newNode;    node.next = newNode;    // set pointer to node 

function SLNode(val) {
    this.value = val;
    this.next = null;   //a pointer to the next SLNode(with the attributes value and next)
}

function SLL() {
    this.head = null;
}

//  Add Front
SLL.prototype.addToFront = function(val) {
    var newNode = new SLNode(val);      // create new node 
    if (this.head == null) {            // list is empty 
        this.head = newNode;            // newNode assign the pointer as head 
    } else {
        newNode.next = this.head;       // assign current head as the next node of newNode
        this.head = newNode;            // assign newNode as the new head 
    }
    return this;
}


//  Add to the end 
SLL.prototype.addToEnd = function(val) {
    var newNode = new SLNode(val);      //create new node 
    if (this.head == null) {            // list is empty 
        this.head = newNode;            // newNode assign the pointer as head 
    } else {
        var current = this.head;        // runner starting point as head 
        while( current.next != null ) {   // if it not the last node
            current = current.next;       // have the runner moving to the next, like i++ 
        }
        current.next = newNode;           // assign newNode linked to the last node
    }
    return this;
}

// Remove Front Node 
SLL.prototype.removeFromFront = function(){
    if ( !this.head ) {
        return;
    }
    this.head = this.head.next;
    return this;
}


// Remove From The End 
SLL.prototype.removeFromEnd = function() {
    if ( !this.head ) {                     // list is empty 
        return;
    } 
    var current = this.head;                // setup runner point at head 
    while ( current.next.next != null) {    // the one after the next is null 
        current = current.next;             // keep the runner moving 
    }
    current.next = null;                    // assign the new end node, point its own next as null 
    return this;
}



// print List 
SLL.prototype.printLst = function() {
    if ( !this.head ) {
        return "Empty list";
    }
    var current = this.head;
    while( current.next != null ) {
        // console.log(current.value);
        process.stdout.write(current.value + "->");     // The "chunk" argument must be one of type string or Buffer.
        current = current.next;
    }
    console.log(current.value);
}


// Create a function that accepts a ListNode pointer and returns the last value in the list.
SLL.prototype.back = function(){
    if( this.head == null ) {
        return;
    }
    var current = this.head;
    while( current.next ) {      //  while( current.next != null) 
        current = current.next;
    }
    console.log(current.value);
}



// MAx To Back
SLL.prototype.maxToBack = function() {
    if ( this.head == null ) {
        return;
    }
    // var max = beforeMax = current = this.head;
    var max = this.head;
    var beforeMax = this.head;
    var current = this.head;
    while ( current.next != null ) {             // node is not the last node 
        if ( max.value < current.next.value ){
            max = current.next;
            beforeMax = current;
        }
        current = current.next;
    }
    beforeMax.next = max.next;          // step 1: link b.next to max.next 
    max.next = null;                    // step 2: max.next assign to null  // disconnect original max.next 
    current.next = max;                 // step 3: point current.next to max node // disconnect original before.next 
    return this;
}



// min To Front
SLL.prototype.minToFront = function() {
    if( !this.head ) {
        return;
    }
    var min = this.head;
    var beforeMin = this.head;
    var current = this.head;
    while( current.next != null ) {
        if( min.value > current.next.value ) {
            min = current.next;
            beforeMin = current;
        }
        current = current.next;
    }
    beforeMin.next = min.next;          // step 1 link before.next to min.next 
    min.next = this.head;               // step 2 set min.next point at the head 
    this.head = min;                    // step 3 point the head to min
    return this;
}


//  Remove Node by given value 
SLL.prototype.removeNode = function(val) {
    if( this.head == null ) {
        return;
    }
    if( this.head.value == val) {
        this.head = this.head.next;         // pointer point the node next to the original head as new head 
        return val;
    }
    var prev = this.head;
    var current = this.head;
    while( current.next ) {
        if( current.value == val ) {
            prev.next = current.next;       // setup link 
            return val;
        }
        prev = current;                     // have prev moving to current node position
        current = current.next;             // runner moving to the next 
    }
    if( current.value == val ) {            // current.next == null // the last node == val 
        prev.next = null;                   // direct assign prev.next == null 
        return val;
    }
    console.log("Index out of range!");     // if any condition met then return, otherwise out of range 
}



// Append At
SLL.prototype.appendAt = function(index, val){
    var newNode = new SLNode(val);              // create new node 
    if( index == 0 ) {
        newNode.next = this.head.next;          // link 
        this.head.next = newNode;               // assign value 
        return this;
    }
    var counter = 0;
    var current = this.head;
    while( current.next ) {
        if( index == counter ) {
            newNode.next = current.next;        // link 
            current.next = newNode;             // assign value 
            return this;
        }
        counter++;
        current = current.next;
    }
    if( index == counter ) {                    // condition for last node 
        newNode.next = null;                    // link 
        current.next = newNode;                 // assign value 
        return this;
    }
    console.log("Index out of range!");
}


// prepend At
SLL.prototype.prependAt = function(index, val){
    var newNode = new SLNode(val);              // create new node
    if( index == 0 ) {
        newNode.next = this.head;               // link 
        this.head = newNode;                    // assign value 
        return this;
    }
    var counter = 0;
    var current = this.head;
    var previous = this.head;
    while( current.next ) {
        if( index == counter ) {
            previous.next = newNode;            // assign value 
            newNode.next = current;             // assign value 
            return this;
        }
        counter++;
        previous = current;                     // move prev to next node 
        current = current.next;                 // move current to the next node 
    }
    if( index == counter ) {                    // condition for last node 
        newNode.next = previous.next;           // link 
        previous.next = newNode;                // assign value 
        return this;
    }
    console.log("Index out of range!");
}


// partition 
// Create partition(ListNode,value) that locates the first node with that value, 
// and moves all nodes with values less than that value to be earlier, 
// and all nodes with values greater than that value to be later. 
// Otherwise, original order need not be perfectly preserved. 
// Return the new head ListNode.
SLL.prototype.partition = function(val) {
    var bigList = new SLL();
    var smallList = new SLL();

    var current = this.head;
    while( current != null ) {
        if( current.value < val ) {
            smallList.addToEnd(current.value);
        } else {
            bigList.addToEnd(current.value)
        }
        current = current.next;
    }
    var runner = smallList.head;
    while( runner.next != null ) {
        runner = runner.next;
    }
    runner.next = bigList.head;
    return smallList;
}




var myList = new SLL();
myList.addToFront(3).addToFront(8).addToFront(1).addToFront(6).addToFront(4);
myList.printLst();      // 4->6->1->8->3

// myList.addToEnd(1).addToEnd(2).addToEnd(3);
// myList.printLst();      // 4->6->1->8->3->1->2->3

// myList.removeFromFront();
// myList.printLst();      // 6->1->8->3->1->2->3

// myList.back();
// myList.printLst();

// myList.maxToBack();
// myList.printLst();       // 4->6->1->3->8

// myList.minToFront();
// myList.printLst();          // 1->4->6->8->3

// console.log(myList);


// myList.appendAt(0,"Again");
// myList.printLst();          // 4->Again->6->1->8->3

// myList.prependAt(2,"Again");
// myList.printLst();              // 4->6->Again->1->8->3

// console.log(myList.removeNode(6));
// myList.printLst();              // 4->1->8->3

// myList = myList.partition(5);
// myList.printLst();                  // 4->1->3->6->8