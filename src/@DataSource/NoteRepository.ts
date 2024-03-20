import { randomUUID } from 'crypto'
import { Todo } from '../@types/Todo.type'

export interface NoteRepository {
  addTodo(todo: string): string
  deleteTodo(id: string): boolean
  updateTodo(id: string, note: string): boolean
  checkDone(id: string): boolean
  checkUndone(id: string): boolean
  getAll(): Todo[]
}

export class NoteRepositoryImpl implements NoteRepository {
  TODO: string = 'TODO'
  addTodo(todo: string): string {
    let todosString = localStorage.getItem(this.TODO)
    if (todosString == null || todosString === '') {
      todosString = '[]'
    }
    const todoItem = {
      id: randomUUID(),
      done: false,
      title: todo
    }
    const todos = JSON.parse(todosString)
    todos.push(todoItem)
    localStorage.setItem(this.TODO, JSON.stringify(todos))
    return todoItem.id
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

export const noteRepository: NoteRepository = new NoteRepositoryImpl()
