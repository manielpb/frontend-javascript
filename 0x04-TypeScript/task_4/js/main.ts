/// <reference path="/Users/manuel/frontend-javascript/0x04-TypeScript/task_4/js/subjects/Teacher.ts" />
/// <reference path="/Users/manuel/frontend-javascript/0x04-TypeScript/task_4/js/subjects/Cpp.ts" />
/// <reference path="/Users/manuel/frontend-javascript/0x04-TypeScript/task_4/js/subjects/Java.ts" />
/// <reference path="/Users/manuel/frontend-javascript/0x04-TypeScript/task_4/js/subjects/React.ts" />


export const cTeacher: Subjects.Teacher = {
    firstName: "Joe",
    lastName: "farrah",
    experienceTeachingC: 10,
}

const cpp = new Subjects.Cpp(cTeacher);

const java = new Subjects.Java(cTeacher);
const react = new Subjects.React(cTeacher);


console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());


console.log("React");
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());
