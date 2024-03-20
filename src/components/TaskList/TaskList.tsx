import PropTypes from 'prop-types'
import { Todo } from '../../@types/Todo.type'
import { TodoPropTypes } from '../../@propTypes/Todo.proptype'
import styles from './taskList.module.scss'
import TodoItem from './TodoItem/TodoItem'
interface TaskListProps {
  taskListItems: Todo[]
  onHandleDoneTodo: (id: string) => void
  onHandleUnDoneTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { taskListItems, onHandleDoneTodo, onHandleUnDoneTodo } = props

  return (
    <>
      <div className={styles.listTodo}>
        {taskListItems.map((task) => (
          <TodoItem todo={task} key={task.id} onDoneTodo={onHandleDoneTodo} onUnDoneTodo={onHandleUnDoneTodo} />
        ))}
      </div>
    </>
  )
}

TaskList.propTypes = {
  taskListItems: PropTypes.arrayOf(TodoPropTypes).isRequired
}
