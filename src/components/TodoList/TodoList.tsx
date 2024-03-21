import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { todoRepository } from '../../@DataSource/NoteRepository'
import { Todo } from '../../@types/Todo.type'
export function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  useEffect(() => {
    const todos = todoRepository.getAll()
    setTodoList(todos)
  }, [])

  const handleTaskAdd = (task: string) => {
    const addedItem = todoRepository.addTodo(task)
    setTodoList((previousTodoList) => [addedItem, ...previousTodoList])
  }
  const handleDoneTodo = (id: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todoRepository.checkDone(id)
        todo.done = true
        return {
          ...todo,
          done: true
        }
      }
      return todo
    })
    updatedTodoList.sort((a, b) => {
      if (a.done === b.done) {
        return 0
      }
      if (a.done) {
        return 1
      }
      return -1
    })
    setTodoList(updatedTodoList)
  }
  const handleUnDoneTodo = (id: string) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todoRepository.checkUndone(id)
        todo.done = false
        return {
          ...todo,
          done: false
        }
      }
      return todo
    })
    updatedTodoList.sort((a, b) => {
      if (a.done === b.done) {
        return 0
      }
      if (a.done) {
        return 1
      }
      return -1
    })
    setTodoList(updatedTodoList)
  }

  const handleUpdateTodo = (id: string, note: string) => {
    todoRepository.updateTodo(id, note)
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.title = note
        return {
          ...todo,
          title: note
        }
      }
      return todo
    })
    setTodoList(updatedTodoList)
  }

  const handleDeleteTodo = (id: string) => {
    todoRepository.deleteTodo(id)
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodoList)
  }

  return (
    <>
      <h2 className={styles.appTitle}>React Keep</h2>
      <TaskInput onTaskAdd={handleTaskAdd} />
      <TaskList
        taskListItems={todoList}
        onHandleDoneTodo={handleDoneTodo}
        onHandleUnDoneTodo={handleUnDoneTodo}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}
