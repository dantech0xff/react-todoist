import { ChangeEvent } from 'react'
import styles from './taskInput.module.scss'
export default function TaskInput() {
  const handleSubmit = () => {}
  const handleInputNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
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
    </>
  )
}
