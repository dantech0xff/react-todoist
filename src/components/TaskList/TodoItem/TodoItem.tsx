import React, { useEffect, useState } from 'react'
import { Todo } from '../../../@types/Todo.type'
import styles from './todoItem.module.scss'

interface TodoItemProps {
  todo: Todo
  onDoneTodo: (id: string) => void
  onUnDoneTodo: (id: string) => void
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, onDoneTodo, onUnDoneTodo } = props
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDone(todo.done)
  }, [todo])

  const handleCheckDone = (event: any) => {
    if (done) {
      onUnDoneTodo && onUnDoneTodo(todo.id)
    } else {
      onDoneTodo && onDoneTodo(todo.id)
    }
  }

  return (
    <>
      <div className={styles.todoItem}>
        <input type='checkbox' checked={done} className={styles.checkBoxItem} onChange={handleCheckDone} />
        <span className={`${styles.todoItemText} ${done ? styles.todoItemTextDone : ''}`}>{todo.title}</span>
      </div>
    </>
  )
}
