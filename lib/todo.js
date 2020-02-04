class Title {
  constructor(name, id, tasks) {
    this.name = name;
    this.id = id;
    this.tasks = tasks || {};
  }
  addTask(id, text) {
    this.tasks[id] = { id, text, status: false };
  }
  mark(id) {
    const task = this.tasks[id];
    task.status = !task.status;
  }
}

class Todo {
  constructor() {
    this.todo = {};
  }

  addTodoTitle(title) {
    this.todo[title.id] = title;
  }

  static load(content) {
    const todoList = JSON.parse(content || '{}');
    const todo = new Todo();
    Object.keys(todoList).forEach(key => {
      todo.addTodoTitle(
        new Title(todoList[key].name, todoList[key].id, todoList[key].tasks)
      );
    });
    return todo;
  }

  addTaskToTitle(titleId, task) {
    const title = this.todo[titleId];
    title.addTask(task.id, task.text);
  }

  markItem(titleId, taskId) {
    const title = this.todo.find(title => title.id === titleId);
    title.mark(taskId);
  }

  get titleJson() {
    return JSON.stringify(this.todo);
  }
}

module.exports = { Todo, Title };