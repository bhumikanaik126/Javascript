class animal{
    constructor(name,speak)
    {
        this.name=name;
        this.speak=speak;
    }
    speaks()
    {
        console.log(this.speak);
    }
    static classType()
    {
        console.log("Animal");
    }
}
let dog= new animal("Tommy","bow bow")//create object
dog.speaks()
animal.classType()// associated to class