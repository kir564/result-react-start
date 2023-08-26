import { SELECT_VALUE } from '../constants';

export const filterTasks = ({ tasks, query, sortingValue }) => {
  let tasksSorting = {};

  if (sortingValue.value === SELECT_VALUE.NOT_SORT) {
    tasksSorting = [...tasks];
  }

  if (sortingValue.value === SELECT_VALUE.ALPHABET) {
    tasksSorting = [...tasks].sort((first, second) =>
      first.title.localeCompare(second.title)
    );
  }
  return tasksSorting.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase().trim())
  );
};
