function main(){
    class Prototype {
        clone() {
            throw new Error("This method should be overwritten!");
        }
    }
    
    class ConcretePrototype extends Prototype {
        constructor(field1) {
            super();
            this.field1 = field1;
        }
    
        clone() {
            return new ConcretePrototype(this.field1);
        }
    }
    
    class SubclassPrototype extends ConcretePrototype {
        constructor(field1, field2) {
            super(field1);
            this.field2 = field2;
        }
    
        clone() {
            return new SubclassPrototype(this.field1, this.field2);
        }
    }
    
    // Teste do código
    const prototype1 = new ConcretePrototype("value1");
    const clone1 = prototype1.clone();
    console.log(clone1); // ConcretePrototype { field1: 'value1' }
    
    const prototype2 = new SubclassPrototype("value1", "value2");
    const clone2 = prototype2.clone();
    console.log(clone2); // SubclassPrototype { field1: 'value1', field2: 'value2' }
}

class Prototype {
    getColor() {
        throw new Error("This method should be overwritten!");
    }

    clone() {
        throw new Error("This method should be overwritten!");
    }
}

class Button extends Prototype {
    constructor(x, y, color) {
        super();
        this.x = x;
        this.y = y;
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    clone() {
        return new Button(this.x, this.y, this.color);
    }
}

class PrototypeRegistry {
    constructor() {
        this.items = {};
    }

    addItem(id, prototype) {
        this.items[id] = prototype;
    }

    getById(id) {
        const item = this.items[id];
        return item ? item.clone() : null;
    }

    getByColor(color) {
        for (let id in this.items) {
            if (this.items[id].getColor() === color) {
                return this.items[id].clone();
            }
        }
        return null;
    }
}

// Teste do código
const registry = new PrototypeRegistry();
const button1 = new Button(10, 20, 'red');
const button2 = new Button(30, 40, 'blue');

registry.addItem('btn1', button1);
registry.addItem('btn2', button2);

const clonedButton1 = registry.getById('btn1');
console.log(clonedButton1); // Button { x: 10, y: 20, color: 'red' }

const clonedButtonByColor = registry.getByColor('blue');
console.log(clonedButtonByColor); // Button { x: 30, y: 40, color: 'blue' }