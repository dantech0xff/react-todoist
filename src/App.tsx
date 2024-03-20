import TodoList from './components/TodoList'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.centerParent}>
      <div className={styles.centerAppContent}>
        <TodoList />
      </div>
    </div>
  )
}

export default App
