/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.store = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.store.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.store.shift()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.store[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.store.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


var MyQueue = function() {
    this.aStack = []
    this.bStack = []
  };
  
  MyQueue.prototype.push = function(x) {
    this.aStack.push(x)
  };

  MyQueue.prototype.pop = function() {
    if(this.bStack.length){
        return this.bStack.pop()
    }
    while(this.aStack.length){
        this.bStack.push(this.aStack.pop())
    }
    return this.bStack.pop()
  };
  
  
  MyQueue.prototype.peek = function() {
    if(this.bStack.length){
        return this.bStack[this.bStack.length - 1]
    }
    while(this.aStack.length){
        this.bStack.push(this.aStack.pop())
    }
    return this.bStack[this.bStack.length - 1]
  };
  
  MyQueue.prototype.empty = function() {
    if(this.bStack.length || this.aStack.length) return false
    return true
  };
  