/// <reference path="/Users/manuel/frontend-javascript/0x04-TypeScript/task_4/js/subjects/Teacher.ts" />


namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
}

namespace Subjects {
    export class Cpp extends Subject {
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
