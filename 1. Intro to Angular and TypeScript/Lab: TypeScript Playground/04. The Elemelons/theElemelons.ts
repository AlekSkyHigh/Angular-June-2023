abstract class Melon {

    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }


    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

}

class Watermelon extends Melon {

    toString(){
        return `Element: Water \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`
    }

}

class Firemelon extends Melon {

    toString(){
        return `Element: Fire \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`
    }
}

class Earthmelon extends Melon {

    toString(){
        return `Element: Earth \n Sort: ${this.melonSort} \n Element Index: ${this.elementIndex}`
    }
}

class Airmelon extends Melon {

    toString(){
        return `Element: Air \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Watermelon {
    
    elements = ['Water', 'Fire', 'Earth', 'Air'];
    currentIndex = 0;

    morph(){
        this.currentIndex++;
        if(this.currentIndex >= this.elements.length){
            this.currentIndex = 0;
        }
    }

    toString(){
        return `Element: ${this.elements[this.currentIndex]} \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`
    }

}



// let test : Melon = new Melon(100, "Test");
//Throws error
// let watermelon: Watermelon = new Watermelon(12.5, "Kingsize"); console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100

let melolemonmelon: Melolemonmelon = new Melolemonmelon(10, "Midsize"); 
melolemonmelon.morph(); 
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph(); 
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph(); 
console.log(melolemonmelon.toString());

