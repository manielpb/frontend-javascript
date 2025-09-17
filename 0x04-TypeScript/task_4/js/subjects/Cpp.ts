/// <reference path="./Teacher.ts" />

namespace Subjects {
    class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp"
        }

        getAvailableTeacher(): string {
            if(!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0){
                return "No available teacher";
            }

            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}