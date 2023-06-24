class KeyValuePair<T, U>
{
    private key: T;
    private val: U;

    setKeyValue(key: T, value: U) {
        this.key = key;
        this.val = value;
    }

    display() {
        console.log(`key = ${this.key}, value = ${this.val}`);
    }
}

let kvp = new KeyValuePair<number, string>(); kvp.setKeyValue(1, "Steve");
kvp.display();

// let kvp = new KeyValuePair<string, number>(); kvp.setKeyValue("John", 6);
// kvp.display();