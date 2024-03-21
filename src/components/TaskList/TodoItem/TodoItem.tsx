import { ChangeEvent, useEffect, useState } from 'react'
import { Todo } from '../../../@types/Todo.type'
import styles from './todoItem.module.scss'

interface TodoItemProps {
  todo: Todo
  onDoneTodo: (id: string) => void
  onUnDoneTodo: (id: string) => void
  onUpdateTodo: (id: string, note: string) => void
  onDeleteTodo: (id: string) => void
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, onDoneTodo, onUnDoneTodo, onUpdateTodo, onDeleteTodo } = props
  const [done, setDone] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(todo.title)

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

  const handleEdit = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value)
  }
  const handleFocus = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEditing(true)
  }
  const handleBlurFocus = (event: ChangeEvent<HTMLInputElement>) => {
    onUpdateTodo && onUpdateTodo(todo.id, event.target.value)
    setIsEditing(false)
  }

  const handleDelete = () => {
    onDeleteTodo && onDeleteTodo(todo.id)
  }

  return (
    <>
      <div className={styles.todoItem}>
        <input type='checkbox' checked={done} className={styles.checkBoxItem} onChange={handleCheckDone} />
        <input
          type='text'
          name='todoText'
          id='todoEdt'
          className={`${styles.todoItemEditText} ${done ? styles.todoItemEditTextDone : ''}`}
          value={todoText}
          onChange={handleEdit}
          onFocus={handleFocus}
          onBlur={handleBlurFocus}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.currentTarget.blur()
            }
          }}
        />
        <button type='button' className={`${styles.deleteButton}`} onClick={handleDelete}>
          X
        </button>
      </div>
    </>
  )
}
