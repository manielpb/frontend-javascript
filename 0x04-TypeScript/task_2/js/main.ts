export function isDirector;

function isDirector(employee: Teacher | Director): employee is Director{
  return employee instanceof isDirector;
}

function executeWork(employee: Teacher | Director){
  if(isDirector(employee)){
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}