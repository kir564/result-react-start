export const filterTasks = ({ tasks, query, isSort }) => {
  const tasksItems = isSort
    ? tasks.toSorted((taskFirst, taskSecond) =>
        taskFirst.title.localeCompare(taskSecond.title)
      )
    : tasks;

  return tasksItems.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase().trim())
  );
};
