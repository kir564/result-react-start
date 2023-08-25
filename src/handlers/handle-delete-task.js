import { requestChangeTasks } from '../request-change-tasks';

export const handleDeleteTask = ({
  id,
  updateFlag,
  setIsLoadAction,
  action,
  navigate,
}) => {
  requestChangeTasks({ id, updateFlag, setIsLoadAction, action, navigate });
};
