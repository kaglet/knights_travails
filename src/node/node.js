class Node {
    constructor(x, y) {
        this.parent = undefined;
        this.x = x;
        this.y = y;
    }

    get x() {
        return this.x;
    }

    get y() {
        return this.y;
    }
}

export default Node;