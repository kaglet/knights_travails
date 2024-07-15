class Node {
    constructor(x, y) {
        this._parent = undefined;
        this._x = x;
        this._y = y;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    set parent(value) {
        this._parent = value;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    } 

    get parent() {
        return this._parent;
    }
}

export default Node;