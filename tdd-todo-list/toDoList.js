class ToDoList {
  constructor() {
    this.toDos = []
  }

  addToDo(task){
    this.toDos.push(task);
  }

  getNumberOfToDos(){
    return this.toDos.length;
  }

  containsToDo(task){
    return this.toDos.includes(task)
  }

}

module.exports = ToDoList