import { requestChangeTasks } from '../request-change-tasks';

export const handleChangeTask = ({
  id,
  action,
  title,
  setIsLoadAction,
  updateFlag,
  setIsOpenChange,
  isOpenChange,
}) => {
  setIsOpenChange(true);
  if (isOpenChange) {
    setIsOpenChange(false);
    requestChangeTasks({ id, action, title, setIsLoadAction, updateFlag });
  }
};
