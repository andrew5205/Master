

// 1. enqueue(val): add val to Queue
// 2. dequeue(): remove & return front value
// 3. front(): return (not remove) first val
// 4. contains(val): Queue contains val?            // need to fix undefined out of range 
// 5. isEmpty(): Queue contains no values?
// 6. size(): return num of vals in Queue


function SLNode(val){
    this.value = val;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
}


//  1. enqueue(val): add val to Queue
SLQueue.prototype.enqueue = function(val) {
    var newNode = new SLNode(val);
    if( !this.head ) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;       // link with original this.tail
        this.tail = newNode;            // assign newNode as new tail
    }
    return this;
}

// 2. dequeue(): remove & return front value
SLQueue.prototype.dequeue = function(val) {
    var current = this.head;
    if ( !this.head ) {
        return;
    } else {
        console.log(current.value)
        this.head = this.head.next;
    }
    return this;
}


// 3. front(): return (not remove) first val
SLQueue.prototype.front = function(val) {
    var current = this.head;
    if ( !this.head ) {
        return;
    } else {
        console.log(current.value);
    }
}



// 4. contains(val): Queue contains val?
SLQueue.prototype.contains = function(val) {
    var current = this.head;
    if ( !this.head ) {
        return " Empty List";
    } else {
        while ( current.next ) {
            if ( current.value != val) {
                current = current.next;
            }
            else if ( current.value == val ) {
                return true;
            }
        }
        return false;
    }
}



// 5. isEmpty(): Queue contains no values?
SLQueue.prototype.isEmpty = function() {
    if ( !this.head ) {
        return true;
    }
    return false;
}



// 6. size(): return num of vals in Queue
SLQueue.prototype.size = function() {
    var current = this.head;
    var count = 1;
    if ( !this.head ) {
        return count - 1;
    } else {
        while ( current.next != null ) {
            count++;
            current = current.next;
        }
        return count;
    }
}



// print Queue
SLQueue.prototype.printQueue = function() {
    if( !this.head ) {
        return "Empty list";
    }
    var current = this.head;
    while( current.next != null ) {
        process.stdout.write(current.value + "->");
        current = current.next;
    }
    console.log(current.value);                     // print out the last node // no need to add "->"
}




var myQueue = new SLQueue();
myQueue.enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6);
myQueue.printQueue();           // 2->3->4->5->6

// myQueue.dequeue().dequeue();
// myQueue.printQueue();           // 4->5->6

// myQueue.front();


// console.log(myQueue.contains(5));       // Found
// console.log(myQueue.contains(10));      // Out Of Range


// console.log(myQueue.isEmpty());

// console.log(myQueue.size());                // 5



