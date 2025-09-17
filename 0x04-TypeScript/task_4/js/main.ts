

const cpp = new Cpp();
const java = new Java();
const react = new React();

export const cTeacher: Teacher = {
    firstName: "Joe";
    lastName: "farrah";
    experienceTeachingC: 10;
}

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


console.log("Java");
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());


console.log("React");
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());
