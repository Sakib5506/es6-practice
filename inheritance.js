class Parent{
    constructor(){
        this.fatherName = 'Bokkar';
    }
}

class Child extends Parent{
    constructor(cName){
        super();
        this.name = cName;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('Hasib');
const baby2 = new Child('Hasib Jr');

console.log(baby1.getFullName(), baby2.getFullName());