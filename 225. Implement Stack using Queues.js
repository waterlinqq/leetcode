/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.store = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.store.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.store.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.store[this.store.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.store.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */




var MyStack = function() {
    this.queue = []
};

MyStack.prototype.push = function(x) {
    var count = this.queue.length
    this.queue.push(x)
    while(count){
        this.queue.push(this.queue.shift())
        count -= 1
    }
};


MyStack.prototype.pop = function() {
    return this.queue.shift()
};


MyStack.prototype.top = function() {
    return this.queue[0]
};

MyStack.prototype.empty = function() {
    return !this.queue.length
};

