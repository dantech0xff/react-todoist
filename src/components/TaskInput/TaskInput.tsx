import { ChangeEvent, useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  onTaskAdd: (task: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const handleSubmit = () => {
    props.onTaskAdd(task)
    setTask('')
  }
  const handleInputNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const [task, setTask] = useState('')

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.taskInputText}
          placeholder='Todo Here...'
          onChange={handleInputNoteChange}
          value={task}
        />
        <button type='submit' className={styles.taskInputButton}>
          🪄
        </button>
      </form>
    </>
  )
}
