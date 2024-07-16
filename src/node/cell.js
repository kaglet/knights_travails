class Cell {
    constructor(x, y) {
        this._parent = undefined;
        this._x = x;
        this._y = y;
        this._visited = false;
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

    visit() {
        this._visited = true;
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

    get visited() {
        return this._visited;
    }
}

export default Cell;