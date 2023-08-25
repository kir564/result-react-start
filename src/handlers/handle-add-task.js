import { requestChangeTasks } from '../request-change-tasks';

export const handleAddTask = ({
  action,
  title,
  updateFlag,
  event,
  setIsLoadAction,
  setNewTask,
}) => {
  event.preventDefault();
  requestChangeTasks({ action, title, updateFlag, setIsLoadAction });
  setNewTask('');
};
