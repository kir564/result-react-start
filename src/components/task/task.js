import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Nav } from '../../components';
import { handleDeleteTask, handleChangeTask } from '../../handlers';
import { ACTION, PATH } from '../../constants';
import styles from './task.module.css';

export const Task = ({ tasks, updateFlag, isLoad }) => {
  const [task, setTask] = useState({ title: '', id: '' });
  const [taskChange, setTaskChange] = useState('');
  const [isChange, setIschange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const taskFound = tasks.find(({ id }) => id === Number(params.id));

  useEffect(() => {
    if (taskFound) {
      setTask(taskFound);
      setTaskChange(taskFound.title);
    }

    if (tasks.length > 0 && !taskFound) {
      navigate(PATH.NOT_FOUND);
    }
  }, [taskFound, tasks]);

  return isLoad ? (
    <h1>Load...</h1>
  ) : (
    <div>
      <div className={styles.task}>
        {isOpenChange ? (
          <textarea
            autoFocus={true}
            className={styles.textarea}
            value={taskChange}
            onChange={({ target }) => setTaskChange(target.value)}
          />
        ) : (
          <div className={styles.title}>{task.title}</div>
        )}
        <div className={styles.buttons}>
          {isOpenChange ? (
            <button
              type='button'
              className={styles.btn}
              onClick={() => setIsOpenChange(false)}
            >
              Отмена
            </button>
          ) : (
            <button
              type='button'
              disabled={isDelete || isLoad || isChange}
              onClick={() =>
                handleDeleteTask({
                  action: ACTION.DELETE,
                  id: task.id,
                  setIsLoadAction: setIsDelete,
                  updateFlag,
                  navigate,
                })
              }
              className={styles.btn}
            >
              Удалить
            </button>
          )}
          <button
            onClick={() => {
              handleChangeTask({
                id: task.id,
                title: taskChange,
                action: ACTION.CHANGE,
                setIsLoadAction: setIschange,
                updateFlag,
                isOpenChange,
                setIsOpenChange,
              });
            }}
            disabled={isDelete || isLoad || isChange}
            className={styles.btn}
          >
            Изменить
          </button>
        </div>
      </div>
      {(isDelete || isChange) && <div>Load...</div>}
      <Nav />
    </div>
  );
};
