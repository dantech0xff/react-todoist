import { ChangeEvent } from 'react'
import styles from './taskInput.module.scss'
export default function TaskInput() {
  const handleSubmit = () => {}
  const handleInputNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>To do list typescript</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.taskInputText}
          placeholder='Todo Here...'
          onChange={handleInputNoteChange}
        />
        <button type='submit' className='{styles.taskInputButton}'>
          +
        </button>
      </form>
    </div>
  )
}
