class Box<T> {
    private _boxes = [];

    public add(el: T) {
        this._boxes.push(el)
    };

    public remove() {
        this._boxes.pop();
    };

    get count(): number {
        return this._boxes.length
    };

}

// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);


let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
