namespace Subjects{
    class Subject {
        teacher: VideoTransferCharacteristics;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}