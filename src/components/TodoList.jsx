import TodoItem from './TodoItem';
import '../sttyle/style.scss'

function TodoList({ tasks, setTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TodoList;