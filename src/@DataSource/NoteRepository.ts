import { Todo } from '../@types/Todo.type'
import { nanoid } from 'nanoid'
export interface ToDoRepository {
  addTodo(todo: string): Todo
  deleteTodo(id: string): boolean
  updateTodo(id: string, note: string): boolean
  checkDone(id: string): boolean
  checkUndone(id: string): boolean
  getAll(): Todo[]
}

export class ToDoRepositoryImpl implements ToDoRepository {
  TODO: string = 'TODO'
  addTodo(todo: string): Todo {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      todosString = '[]'
    }
    const todoItem = {
      id: nanoid(),
      done: false,
      title: todo,
      created_at: new Date(),
      updated_at: new Date()
    }
    const todos = JSON.parse(todosString)
    todos.push(todoItem)
    localStorage.setItem(this.TODO, JSON.stringify(todos))
    return todoItem
  }

  deleteTodo(id: string): boolean {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      return false
    }
    const todos = JSON.parse(todosString)
    const newTodos = todos.filter((todo: Todo) => todo.id !== id)
    localStorage.setItem(this.TODO, JSON.stringify(newTodos))
    return true
  }
  updateTodo(id: string, note: string): boolean {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      return false
    }
    const todos = JSON.parse(todosString)
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.title = note
        todo.updated_at = new Date()
      }
      return todo
    })
    localStorage.setItem(this.TODO, JSON.stringify(newTodos))
    return true
  }
  checkDone(id: string): boolean {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      return false
    }
    const todos = JSON.parse(todosString)
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.done = true
        todo.updated_at = new Date()
      }
      return todo
    })
    localStorage.setItem(this.TODO, JSON.stringify(newTodos))
    return true
  }
  checkUndone(id: string): boolean {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      return false
    }
    const todos = JSON.parse(todosString)
    const newTodos = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.done = false
        todo.updated_at = new Date()
      }
      return todo
    })
    localStorage.setItem(this.TODO, JSON.stringify(newTodos))
    return true
  }

  getAll(): Todo[] {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      return []
    }
    const todos = JSON.parse(todosString)
    return todos
  }
}

export const todoRepository: ToDoRepository = new ToDoRepositoryImpl()
