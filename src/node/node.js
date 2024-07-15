class Node {
    constructor(x, y) {
        this.parent = undefined;
        this.x = x;
        this.y = y;
    }

    set x(x) {
        this.x = x;
    }

    set y(y) {
        this.y = y;
    }

    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }

    set parent(parent) {
        this.parent = parent;
    } 

    get parent() {
        return this.parent;
    }
}

export default Node;