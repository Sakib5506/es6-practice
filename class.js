class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName; 
        this.school = 'M.G.H.S.'
    }
}

const student1 = new Student(1,'Hasib');
const student2 = new Student(2,'Subbir');
console.log(student1.name, student2);