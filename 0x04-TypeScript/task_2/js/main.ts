export function isDirector;

function isDirector(employee: Teacher | Director): employee is  Director{

}

function executeWork(employee: Teacher | Direcctor): employee is Director{
  return instanceof workDirectorTasks()
}