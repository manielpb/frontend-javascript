namespace Subjects{
    class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}