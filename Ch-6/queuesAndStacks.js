
// Queue
// It is always wise to borrow great ideas from the past, 
// and over time well-known patterns have emerged for storing, managing and retrieving information. 

// These patterns are reflected in reusable code called data structures.


// As we study data structures, it is important to keep in mind that 
// these data structures could be implemented in a number of ways, 
// using different building blocks underneath. 

// For this reason, data structures such as Queues are considered Abstract Data Types.

// the outward behavior of the data structure is well understood, 
// but there is no requirement on how the data structure is constructed internally.


// FIFO 
// Queues enforce this, as Sequential data structures. 
// Values emerge in order we add them. Like waiting in line at a store, 
// first value to enter is the first to exit (first customer to
// wait in line is the first to get a tasty treat!). 
// For this reason, Queues contain only a few methods:

// 1. enqueue(val): add val to Queue
// 2. dequeue(): remove & return front value
// 3. front(): return (not remove) first val
// 4. contains(val): Queue contains val?
// 5. isEmpty(): Queue contains no values?
// 6. size(): return num of vals in Queue






// Stack 
// Stacks and Queues are companion data structures. 
// Both are sequential, meaning they manage data
// according to the order in which they were added. 
// A Queue data structure operates by a principle of “First-In becomes First-Out” (FIFO); 
// a Stack is quite the opposite (Last-In, First-Out or LIFO).


// Consider a pile of papers. With this stack of papers, we can only get a good look at the top of the pile.
// When we add another paper, that page becomes the only one visible. 

// We can only add and remove papers from the top. 

// We cannot add a page mid-stack (just as one should not cut into the middle of a
// queue at the ice cream store). 

// In this way, Stacks and Queues mirror one another. 
// Their methods correspond: substitute push / pop / top for enqueue / dequeue / front, and they become identical.





