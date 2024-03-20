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
    const newTodoList = [...todoList, addedItem]
    setTodoList(newTodoList)
  }

  return (
    <>
      <h2 className={styles.appTitle}>React Keep</h2>
      <TaskInput onTaskAdd={handleTaskAdd} />
      <TaskList taskListItems={todoList} />
    </>
  )
}
