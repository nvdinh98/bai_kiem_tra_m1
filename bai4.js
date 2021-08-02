
    class Animal {
    name;
    weight;

    constructor(name, weight) {
    this.name = name
    this.weight = weight
}

    getName() {
    return this.name
}

    setName(name) {
    this.name = name
}

    getWeight() {
    return this.weight
}

    setWeight(weight) {
    this.weight = weight
}

    toString() {
    return "tên của bạn là : " + this.name + "cân nặng của bạn là : " + this.weight
}
}

    let objAnimal1 = new Animal("Elephant", 45.6)
    objAnimal1.toString()
    let objAnimal2 = new Animal("Elephant", 45.6)
    objAnimal2.setName('Mouse')
    document.writeln("objAnimal1 : " + objAnimal1 + "<br>" + "objAnimal2 : " + objAnimal2)
