import React from 'react'
import PropTypes from 'prop-types'
import { Todo } from '../../@types/Todo.type'
import { TodoPropTypes } from '../../@propTypes/Todo.proptype'

interface TaskListProps {
  taskListItems: Todo[]
}

export default function TaskList(props: TaskListProps) {
  const { taskListItems } = props
  return (
    <>
      <div>
        <h2>Task List</h2>
        <div>
          {taskListItems.map((task) => (
            <div key={task.id}>
              <input type='checkbox' checked={task.done} />
              <span>{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

TaskList.propTypes = {
  taskListItems: PropTypes.arrayOf(TodoPropTypes).isRequired
}
