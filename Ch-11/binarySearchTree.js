

// main function 
// insert(val)
// contain(val)
// depth(callback)
// delete(val)



// binary search tree (BST) - Ordered data structure, an important data structure.
// The BST is optimized for quickly finding/retrieving elements.
// A BST is similar to a linked list, in that it stores data elements within node objects

// In a binary tree each node has a value, plus pointers to two children, left and right.

// these pointer attributes often reference another node, but can be null.

// Linked lists and binary trees always start with a single node; 
// in a linked list we call it the head --> in a binary tree we call it the root


// Rules: 
// The binary search tree adds a requirement that for every node, 

// all nodes in its left subtree must have smaller values.

// right subtree must contain only values that are greater than or equal to its
// value.


// BST nodes without children are considered leaf nodes


function BTNode(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    }


function BST() {
    this.root = null;
    }


// Add 
// Create an insert(val) method on the BST object to add new value to the tree. 
// This entails creating a BTNode with this value and connecting it at the
// appropriate place in the tree. 
// Unless specified otherwise, BSTs can contain duplicate values.







// insert
BST.prototype.insert = function(val) {
    
    if( !this.root ) {
        this.root = new BTNode(val);
        return this;
    }
    
    var current = this.root;
    var newNode = new BTNode(val); 
    
    while( current ) {
        
        if ( val = current.value ) {
            return;
        }
        
        if( val < current.value ) {
            if( !current.left ) {
                current.left = newNode;
                break;
            }
            current = current.left;
        } 
        
        if ( val > current.value ) {
            if( !current.right ) {
                current.right = newNode;
                break;
            }
            current = current.right;
        }
    }
    
}




// contains
BST.prototype.contains = function(val) {
    var current = this.root;
    while(current) {
        if( val == current.value ) {
            return true;
        }
        if( val < current.value ) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
}


// Height
BST.prototype.getHeight = function(node) {
    if( !node ) {
        return -1;
    }
    var left = this.getHeight(node.left);
    var right = this.getHeight(node.right);
    return Math.max(left, right) + 1;
};



        
var bst = new BST();
// console.log(bst.add(1));
console.log(bst.insert(4));
console.log(bst.contains(4));
console.log(bst.contains(1));
console.log(bst.getHeight());











// *************************************************************************************** //
// BST.prototype.add = function(val) {
//     var newNode = new BTNode(val);
//     if ( !this.root ) {
//         this.root = newNode;
//         return this;
//     } else {
//         this.insert(current);
//     }
//     return this;
// }


// // find 
// BST.prototype.find = function(val) {
//     if ( !this.value ) {
//         return null;
//     }

//     var current = this.root;
//     while ( current ) {
//         if ( val = current.value ) {
//             return current.value;
//         }
//         if ( current.right && val > current.value ) {
//             current = current.right;
//         } else {
//             current = current.left;
//         }
//     }
//     return false;
// }


// // contains 
// BST.prototype.contains = function(val) {
//     const found = this.find(val);
//     if ( found ) {
//         return true;
//     } else {
//         return false;
//     }
// }
