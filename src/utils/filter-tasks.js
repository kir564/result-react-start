export const filterTasks = ({ tasks, query, isSort }) => {
  const arrayTasks = Object.entries(tasks).map(
    ([id, { title, completed }]) => ({
      id,
      title,
      completed,
    })
  );

  const tasksItems = isSort
    ? arrayTasks.toSorted((taskFirst, taskSecond) =>
        taskFirst.title.localeCompare(taskSecond.title)
      )
    : arrayTasks;

  return tasksItems.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase().trim())
  );
};
