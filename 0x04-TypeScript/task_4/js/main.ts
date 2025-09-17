import { Teacher } from "./Teacher";
import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";

export const cTeacher: Teacher = {
    firstName: "Joe",
    lastName: "farrah",
    experienceTeachingC: 10,
}

const cpp = new Cpp();

const java = new Java ();
const react = new React();


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
