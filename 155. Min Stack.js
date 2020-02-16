
var MinStack = function() {
    this.stack = [];
    this.min_stack = [];
};


MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.min_stack.length == 0 || this.min_stack[this.min_stack.length-1] >= x){
        this.min_stack.push(x);
    }
};


MinStack.prototype.pop = function() {
    if(this.stack.pop() == this.min_stack[this.min_stack.length-1]){
        this.min_stack.pop();
    }
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};


MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length-1];
};

////

var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

MinStack.prototype.push = function(x) {

    if(this.min >= x){
        this.stack.push(this.min);
        this.min = x;
    }
    this.stack.push(x)
};


MinStack.prototype.pop = function() {
    if(this.stack.pop() == this.min){
        this.min = this.stack.pop();
    }
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};


MinStack.prototype.getMin = function() {
    return this.min;
};


