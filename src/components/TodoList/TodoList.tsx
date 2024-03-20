import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'

export function TodoList() {
  return (
    <>
      <h2 className={styles.appTitle}>React Keep</h2>
      <TaskInput />
      <TaskList
        taskListItems={[
          {
            id: '1',
            done: false,
            title: 'Task 1'
          },
          {
            id: '2',
            done: false,
            title: 'Task 2'
          },
          {
            id: '3',
            done: false,
            title: 'Task 3'
          }
        ]}
      />
    </>
  )
}
