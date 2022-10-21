const sName = [];
const students = [
    {id: 21, name:'Sakib'},
    {id: 24, name:'Sabbir'},
    {id: 31, name:'Vini'},
    {id: 41, name:'Kroos'}
];
for(let i = 0; i < students.length; i++){
    sName.push(students[i].name);
}
const id = students.map(e => e.id);

console.log(sName);
console.log(id);