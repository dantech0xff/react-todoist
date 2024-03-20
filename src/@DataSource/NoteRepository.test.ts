import { ToDoRepositoryImpl } from './NoteRepository'

describe('NoteRepositoryImpl', () => {
  let noteRepository: ToDoRepositoryImpl

  beforeEach(() => {
    noteRepository = new ToDoRepositoryImpl()
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  test('addTodo should add a new todo item to localStorage', () => {
    const todo = 'Buy groceries'
    const id = noteRepository.addTodo(todo)

    const todosString = localStorage.getItem(noteRepository.TODO)
    const todos = JSON.parse(todosString || '[]')

    expect(todos.length).toBe(1)
    expect(todos[0].id).toBe(id)
    expect(todos[0].done).toBe(false)
    expect(todos[0].title).toBe(todo)
  })

  test('deleteTodo should remove a todo item from localStorage', () => {
    const todo1 = 'Buy groceries'
    const todo2 = 'Walk the dog'
    noteRepository.addTodo(todo1)
    const todo = noteRepository.addTodo(todo2)

    noteRepository.deleteTodo(todo.id)

    const todosString = localStorage.getItem(noteRepository.TODO)
    const todos = JSON.parse(todosString || '[]')
    console.log(todos)
    expect(todos.length).toBe(1)
    expect(todos[0].id).not.toBe(todo.id)
    expect(todos[0].title).toBe(todo1)
  })

  test('updateTodo should update a todo item in localStorage', () => {
    const todo1 = 'Buy groceries'
    const todo2 = 'Walk the dog'
    const todo = noteRepository.addTodo(todo1)
    noteRepository.addTodo(todo2)

    const newTodo = 'Buy milk'
    noteRepository.updateTodo(todo.id, newTodo)

    const todosString = localStorage.getItem(noteRepository.TODO)
    const todos = JSON.parse(todosString || '[]')
    expect(todos.length).toBe(2)
    expect(todos[0].id).toBe(todo.id)
    expect(todos[0].title).toBe(newTodo)
  })

  test('checkDone should mark a todo item as done in localStorage', () => {
    const todo1 = 'Buy groceries'
    const todo2 = 'Walk the dog'
    const todo = noteRepository.addTodo(todo1)
    noteRepository.addTodo(todo2)

    noteRepository.checkDone(todo.id)

    const todosString = localStorage.getItem(noteRepository.TODO)
    const todos = JSON.parse(todosString || '[]')
    expect(todos.length).toBe(2)
    expect(todos[0].id).toBe(todo.id)
    expect(todos[0].done).toBe(true)
  })

  test('checkUndone should mark a todo item as undone in localStorage', () => {
    const todo1 = 'Buy groceries'
    const todo2 = 'Walk the dog'
    const todo = noteRepository.addTodo(todo1)
    noteRepository.addTodo(todo2)

    noteRepository.checkDone(todo.id)
    noteRepository.checkUndone(todo.id)

    const todosString = localStorage.getItem(noteRepository.TODO)
    const todos = JSON.parse(todosString || '[]')
    expect(todos.length).toBe(2)
    expect(todos[0].id).toBe(todo.id)
    expect(todos[0].done).toBe(false)
  })

  test('getTodos should return all todo items from localStorage', () => {
    const todo1 = 'Buy groceries'
    const todo2 = 'Walk the dog'
    const id1 = noteRepository.addTodo(todo1)
    const id2 = noteRepository.addTodo(todo2)

    const todos = noteRepository.getAll()

    expect(todos.length).toBe(2)
    expect(todos[0].id).toBe(id1)
    expect(todos[0].done).toBe(false)
    expect(todos[0].title).toBe(todo1)
    expect(todos[1].id).toBe(id2)
    expect(todos[1].done).toBe(false)
    expect(todos[1].title).toBe(todo2)
  })
})
