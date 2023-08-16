import { useState } from 'react';
import { useRequestGetTasks } from './hooks';
import {
  TaskList,
  AddTask,
  ChangeTaskModal,
  SearchTask,
  Sort,
} from './components';
import { filterTasks } from './utils';
import styles from './todo.module.css';

function Todo() {
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [query, setQery] = useState('');
  const [isSort, setIsSort] = useState(false);
  const [isChangingTask, setIsChangingTask] = useState(false);
  const [taskForChange, setTaskForChange] = useState({ id: '', title: '' });

  const { tasks, isLoading } = useRequestGetTasks(refreshTodosFlag);
  const tasksItems = filterTasks({ tasks, query, isSort });

  return (
    <div className={styles.todo}>
      {isLoading && (
        <div className={styles.wrapperLoader}>
          <div className={styles.loader}></div>
        </div>
      )}
      <Sort isSort={isSort} setIsSort={setIsSort} />
      <SearchTask
        setQery={setQery}
        tasks={tasks}
        isChangingTask={isChangingTask}
      />
      {!query && (
        <AddTask
          refreshTodosFlag={refreshTodosFlag}
          setRefreshTodosFlag={setRefreshTodosFlag}
          isLoading={isLoading}
        />
      )}
      {tasksItems.length !== 0 ? (
        <TaskList
          tasks={tasksItems}
          setRefreshTodosFlag={setRefreshTodosFlag}
          refreshTodosFlag={refreshTodosFlag}
          isLoading={isLoading}
          setIsChangingTask={setIsChangingTask}
          setTaskForChange={setTaskForChange}
        />
      ) : (
        <div className={styles.noTasks}>Задач не найдено</div>
      )}
      {isChangingTask && (
        <ChangeTaskModal
          setIsChangingTask={setIsChangingTask}
          taskForChange={taskForChange}
          refreshTodosFlag={refreshTodosFlag}
          setRefreshTodosFlag={setRefreshTodosFlag}
        />
      )}
    </div>
  );
}

export default Todo;
