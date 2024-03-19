import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

export function TodoList() {
  return (
    <div>
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
    </div>
  )
}
