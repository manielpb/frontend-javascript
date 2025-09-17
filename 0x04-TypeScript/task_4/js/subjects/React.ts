namespace Subjects{
    export interface Teacher{
        experienceTeachingReact?: number;
    }
}

namespace Subjects{
    class React extends Subject{
        getRequirements(): string {
            return "Here is the requirements for React";
        }

        getAvailableTeacher(): string{
            if(!this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0 ){
                return "No Available Teacher"
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}