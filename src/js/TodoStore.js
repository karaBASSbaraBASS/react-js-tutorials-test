import React from "react"
import { computed, observable } from "mobx"

export class TodoStore extends React.Component {
  @observable todos = ["buy milk", "buy cheese"]
  @observable filter = ""
  @computed get filteredTodos() {
    var matchFilter = new RegExp(this.filter, "i")
    return this.todos.filter(todo => !this.filter || matchFilter.test(todo))
  }

  createTodo(value) {
    this.todos.push(value)
  }
}
// class Todo {
//   @observable value
//   @observable id
//   @observable complete

//   constructor(value) {
//     this.value = value
//     this.id = Date.now()
//     this.complete = false
//   }
// }

// export class TodoStore {
//   @observable todos = []
//   @observable filter = ""
//   @computed get filteredTodos() {
//     var matchesFilter = new RegExp(this.filter, "i")
//     return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
//   }

//   createTodo(value) {
//     this.todos.push(new Todo(value))
//   }

//   clearComplete = () => {
//     const incompleteTodos = this.todos.filter(todo => !todo.complete)
//     this.todos.replace(incompleteTodos)
//   }
// }

export default new TodoStore

