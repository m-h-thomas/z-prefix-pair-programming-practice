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

}

module.exports = ToDoList